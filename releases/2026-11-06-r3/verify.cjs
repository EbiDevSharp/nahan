const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const { createHash } = require('node:crypto');

async function main() {
  const sourcePath = path.join(__dirname, '_worker.js');
  const source = fs.readFileSync(sourcePath, 'utf8');
  const html = fs.readFileSync(path.join(__dirname, '../2026-11-06-obfuscator-r3/mobhamsaziv2.html'), 'utf8');
  const scripts = [...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)]
    .filter(match => !/\bsrc\s*=/.test(match[1])).map(match => match[2]);
  const sandbox = { TextEncoder, TextDecoder, Uint8Array, crypto: globalThis.crypto, btoa, atob };
  vm.createContext(sandbox);
  vm.runInContext(scripts.find(script => script.includes('root.NahanWorkerObfuscator=')), sandbox);
  const tool = sandbox.NahanWorkerObfuscator;
  const prepared = tool.prepare(source);
  const moduleName = prepared.meta.footer.match(/return (\w+);/)[1];
  const body = prepared.body.slice(0, -prepared.meta.footer.length) +
    `\nreturn { worker: ${moduleName}, getDashboardUI, getDashboardClientScript, writeTransportBytes, sharedPanelConfig };`;
  const runtime = new Function(...prepared.bindings, body)(() => { throw new Error('Unexpected network access'); });
  assert.equal(typeof runtime.worker.fetch, 'function');
  const client = runtime.getDashboardClientScript();
  new vm.Script(client);
  const clientTree = sandbox.acorn.parse(client, { ecmaVersion: 'latest', sourceType: 'script' });
  assert.ok(clientTree.body.some(node => node.type === 'FunctionDeclaration' && node.id.name === 'doLogin'));
  let inlineCount = 0;
  for (const hasDB of [false, true]) {
    const page = runtime.getDashboardUI(hasDB);
    assert.ok(/assets\/dashboard\.js/.test(page));
    for (const match of page.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)) {
      if (/\bsrc\s*=/.test(match[1])) continue;
      new vm.Script(match[2]);
      inlineCount++;
    }
  }
  const response = await runtime.worker.fetch(new Request('https://example.test/sync/assets/dashboard.js'), {}, {});
  assert.equal(response.status, 200);
  assert.equal(response.headers.get('X-Nahan-UI-Build'), '20261106-r3');
  assert.equal(await response.text(), client);
  const input = Uint8Array.from({length: 256 * 1024 + 17}, (_, index) => index % 251);
  const chunks = [];
  await runtime.writeTransportBytes({write: async bytes => chunks.push(Buffer.from(bytes))}, input);
  assert.equal(chunks.length, 5);
  assert.ok(chunks.every(chunk => chunk.length <= 64 * 1024));
  assert.deepEqual(Buffer.concat(chunks), Buffer.from(input));
  assert.deepEqual(runtime.sharedPanelConfig({name:'test',syncSecret:'secret',masterKey:'password',totpSecret:'totp',linkedPanels:[]}), {name:'test'});
  const staticHTML = fs.readFileSync(path.join(__dirname, '../2026-11-06-obfuscator-r4/mobhamsaziv4.html'), 'utf8');
  for (const match of staticHTML.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)) {
    if (/\bsrc\s*=/.test(match[1])) continue;
    new vm.Script(match[2]);
    if (match[2].includes('factory(global.Terser') || match[2].includes('const legacy = root.NahanWorkerObfuscator')) vm.runInContext(match[2],sandbox);
  }
  const staticTool = sandbox.NahanWorkerObfuscator;
  let loader;
  const loaderPath = path.join(__dirname, '_worker-obfuscated.js');
  if (process.argv.includes('--build')) {
    loader = await staticTool.obfuscate(source);
    fs.writeFileSync(loaderPath, loader);
  } else {
    loader = fs.readFileSync(loaderPath, 'utf8');
  }
  assert.equal(staticTool.deobfuscate(loader), source);
  const loaderTree = sandbox.acorn.parse(loader, {ecmaVersion:'latest',sourceType:'module'});
  const edits = loaderTree.body.filter(node => node.type === 'ImportDeclaration').map(node => ({start:node.start,end:node.end,text:''}));
  const exported = loaderTree.body.find(node => node.type === 'ExportDefaultDeclaration');
  edits.push({start:exported.start,end:exported.end,text:'return ' + loader.slice(exported.declaration.start,exported.declaration.end) + ';'});
  let executable = loader;
  for (const edit of edits.sort((a,b) => b.start-a.start)) executable = executable.slice(0,edit.start) + edit.text + executable.slice(edit.end);
  const loaderBindings = loaderTree.body.filter(node=>node.type==='ImportDeclaration').flatMap(node=>node.specifiers.map(specifier=>specifier.local.name));
  const decodedRuntime = new Function(...loaderBindings, executable)(() => { throw new Error('Unexpected network access'); });
  assert.equal(typeof decodedRuntime.fetch, 'function');
  const staticResponse = await decodedRuntime.fetch(new Request('https://example.test/sync/assets/dashboard.js'),{},{});
  assert.equal(await staticResponse.text(),client);
  console.log(`PASS: Worker initialization; dashboard client and ${inlineCount} inline scripts; login declaration; asset response; 64 KiB upload chunks and byte order; private sync fields; exact obfuscator round-trip and loader initialization.`);
  console.log('Source SHA-256: ' + createHash('sha256').update(fs.readFileSync(sourcePath)).digest('hex'));
}
main().catch(error => { console.error(error); process.exitCode = 1; });
