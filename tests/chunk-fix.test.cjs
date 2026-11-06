const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { webcrypto, createHash } = require('node:crypto');

const source = fs.readFileSync(path.join(__dirname, '../_worker-chunk-fix.js'), 'utf8');
const baseline = fs.readFileSync(path.join(__dirname, '../_worker.js'), 'utf8');
const limit = 64 * 1024;
const profile = {id:'11111111-1111-4111-8111-111111111111',name:'test'};
const payload = size => Uint8Array.from({length:size},(_,i)=>i % 251);
const bytes = chunks => Buffer.concat(chunks.map(chunk=>Buffer.from(chunk)));

function context(extra = {}, text = source) {
  const sandbox = {
    ArrayBuffer, Uint8Array, DataView, TextDecoder, WritableStream,
    crypto:webcrypto, activeConnections:0, CONN_HEARTBEAT_MS:30000,
    setInterval:()=>0, clearInterval:()=>{},
    d1RegisterConn:async()=>{}, d1TouchConn:async()=>{}, d1RemoveConn:async()=>{},
    trackUsage:()=>{}, registerConnectionSlot:()=>true,
    getAllProfiles:()=>[profile],
    getTrojanHash:id=>createHash('sha224').update(id).digest('hex'),
    sysConfig:{customDns:''}, ...extra,
  };
  vm.createContext(sandbox);
  const start = text.includes('const TRANSPORT_CHUNK_BYTES') ? text.indexOf('const TRANSPORT_CHUNK_BYTES') : text.indexOf('async function startDataPipe(');
  vm.runInContext(text.slice(start,text.indexOf('\nfunction generateHardwareId(',start)),sandbox);
  return sandbox;
}

test('the only source changes are the chunk helpers and three transfer calls',()=>{
  const start = source.indexOf('const TRANSPORT_CHUNK_BYTES');
  const end = source.indexOf('async function startDataPipe(',start);
  const restored = (source.slice(0,start)+source.slice(end))
    .replace('await writeTransportChunks(dataWriter, event.data);','await dataWriter.write(event.data);')
    .replace('await writeTransportChunks(dataWriter, chunk);','await dataWriter.write(chunk);')
    .replace('sendTransportChunks(webSocket, chunk);','webSocket.send(chunk);');
  assert.equal(restored,baseline);
});

for (const size of [0,1,limit-1,limit,limit+1,256*1024,1024*1024,1024*1024+17]) {
  test(`upload/download preserve ${size} bytes within 64 KiB`,async()=>{
    const runtime = context();
    const input = payload(size);
    const uploaded = [];
    let writing = false;
    await runtime.writeTransportChunks({async write(chunk){
      assert.equal(writing,false,'writes must be awaited');
      writing = true;
      await Promise.resolve();
      assert.ok(chunk.byteLength<=limit);
      uploaded.push(Buffer.from(chunk));
      writing = false;
    }},input.buffer);
    assert.deepEqual(bytes(uploaded),Buffer.from(input));
    const downloaded = [];
    runtime.sendTransportChunks({send(chunk){
      assert.ok(chunk.byteLength<=limit);
      downloaded.push(Buffer.from(chunk));
    }},input);
    assert.deepEqual(bytes(downloaded),Buffer.from(input));
    assert.equal(uploaded.length,Math.ceil(size/limit));
    assert.equal(downloaded.length,Math.ceil(size/limit));
  });
}

test('typed array and DataView offsets exclude surrounding bytes',async()=>{
  const runtime = context();
  const storage = payload(limit+50);
  for (const view of [storage.subarray(7,limit+19),new DataView(storage.buffer,7,limit+12)]) {
    const received = [];
    await runtime.writeTransportChunks({write:async chunk=>received.push(Buffer.from(chunk))},view);
    assert.deepEqual(bytes(received),Buffer.from(storage.subarray(7,limit+19)));
  }
});

test('a failed write stops before later chunks',async()=>{
  const runtime = context();
  let calls = 0;
  await assert.rejects(runtime.writeTransportChunks({async write(){if(++calls===2)throw new Error('sink failed');}},payload(limit*3)),/sink failed/);
  assert.equal(calls,2);
  assert.throws(()=>runtime.sendTransportChunks({send(){throw new Error('socket failed');}},payload(limit*3)),/socket failed/);
});

function firstMessage(protocol, data) {
  let header;
  if (protocol==='vless') {
    header = Buffer.concat([Buffer.from([0]),Buffer.from(profile.id.replaceAll('-',''),'hex'),Buffer.from([0,1,1,187,1,1,1,1,1])]);
  } else {
    header = Buffer.concat([Buffer.from(createHash('sha224').update(profile.id).digest('hex')+'\r\n'),Buffer.from([1,1,1,1,1,1,1,187,13,10])]);
  }
  const message = Buffer.concat([header,Buffer.from(data)]);
  return Uint8Array.from(message).buffer;
}

async function until(condition) {
  for (let i=0;i<100;i++) {
    if (condition()) return;
    await new Promise(resolve=>setImmediate(resolve));
  }
  throw new Error('Transfer did not finish');
}

async function tunnel(text, download = new Uint8Array(0)) {
  const uploaded = [], sent = [], events = new Map();
  let closed = false, oversizedWrites = 0;
  const ws = {
    addEventListener(name,handler){const listeners=events.get(name)||[];listeners.push(handler);events.set(name,listeners);},
    send(chunk){assert.ok(chunk.byteLength<=limit);sent.push(Buffer.from(chunk));},
    close(){closed=true;},
    message(data){for(const handler of events.get('message')||[])handler({data});},
  };
  const socket = {
    opened:Promise.resolve(),
    writable:{getWriter:()=>({async write(chunk){
      if(chunk.byteLength>limit){oversizedWrites++;throw new Error('Sink rejects oversized write');}
      await Promise.resolve();
      uploaded.push(Buffer.from(chunk));
    }})},
    readable:new ReadableStream({start(controller){if(download.byteLength)controller.enqueue(download);controller.close();}}),
  };
  const runtime = context({connect:()=>socket},text);
  await runtime.startDataPipe(ws,{}, {waitUntil:promise=>promise.catch(()=>{})});
  return {ws,uploaded,sent,isClosed:()=>closed,oversizedWrites:()=>oversizedWrites};
}

test('regression: original upload closes on a 256 KiB initial payload',async()=>{
  const t = await tunnel(baseline);
  t.ws.message(firstMessage('vless',payload(256*1024)));
  await until(t.isClosed);
  assert.equal(t.uploaded.length,0);
  assert.equal(t.oversizedWrites(),1);
});

for (const protocol of ['vless','trojan']) {
  test(`${protocol}: initial and queued upload plus large download keep byte order`,async()=>{
    const download = payload(1024*1024+17);
    const t = await tunnel(source,download);
    const initial = payload(256*1024);
    const next = payload(1024*1024);
    const tail = payload(17);
    t.ws.message(firstMessage(protocol,initial));
    t.ws.message(next.buffer);
    t.ws.message(tail.buffer);
    const expected = bytes([initial,next,tail]);
    await until(()=>bytes(t.uploaded).length===expected.length && bytes(t.sent.filter(chunk=>chunk.length!==2)).length===download.byteLength);
    assert.deepEqual(bytes(t.uploaded),expected);
    assert.deepEqual(bytes(t.sent.filter(chunk=>chunk.length!==2)),Buffer.from(download));
    assert.equal(t.isClosed(),false);
    assert.equal(t.sent.filter(chunk=>chunk.length===2).length,protocol==='vless'?1:0);
  });
}
