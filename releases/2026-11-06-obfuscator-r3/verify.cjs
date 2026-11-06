const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const html = fs.readFileSync(path.join(__dirname, 'mobhamsaziv2.html'), 'utf8');
const scripts = [...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)]
  .filter(match => !/\bsrc\s*=/.test(match[1])).map(match => match[2]);
for (const script of scripts) new vm.Script(script);
const sandbox = { TextEncoder, TextDecoder, Uint8Array, crypto: globalThis.crypto, btoa, atob };
vm.createContext(sandbox);
const engine = scripts.find(script => script.includes('root.NahanWorkerObfuscator='));
assert.ok(engine, 'Obfuscator engine is present');
vm.runInContext(engine, sandbox);
const tool = sandbox.NahanWorkerObfuscator;
const sources = [
  'const text = "export default bogus"; export default { text };',
  'const html = `<button onclick="doLogin()">export default</button>`; export default { html };',
  'export default function fetchHandler() { return "ok"; }',
  'export default class Runtime { fetch() { return "ok"; } }',
  'import { connect as socketConnect } from "cloudflare:sockets"; export default { connect: socketConnect };',
  fs.readFileSync(path.join(__dirname, '../../_worker.js'), 'utf8'),
];
for (const source of sources) {
  const output = tool.obfuscate(source);
  assert.equal(tool.deobfuscate(output), source, 'Exact source round-trip');
  const prepared = tool.prepare(source);
  new Function(...prepared.bindings, prepared.body);
}
const source = sources[0];
const prepared = tool.prepare(source);
assert.equal(new Function(prepared.body)().text, 'export default bogus');
assert.throws(() => tool.prepare('export const named = 1; export default {};'));
assert.throws(() => tool.hexKey('xyz'));
console.log(`PASS: ${scripts.length} inline scripts compile; ${sources.length} exact round-trips; runtime and rejection checks.`);
