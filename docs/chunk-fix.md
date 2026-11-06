# Original Worker: chunk size fix only

`/_worker-chunk-fix.js` is based on the original root `/_worker.js` at commit
`77f43ee77931fc8e90eee777512986fd7f9e84ff` (original Worker blob
`8ed47eb0d80086bec9e4134dd1efc1014910b9bb`). It does not use the later r3 release.

The only code changes are three helpers and three transfer call replacements:

- Initial upload payload and subsequent upload messages are written to TCP in
  sequential pieces of at most 64 KiB, awaiting each write.
- TCP download chunks are sent as WebSocket messages of at most 64 KiB.
- Byte order and the boundaries of typed array views are preserved.

The root Worker remains unchanged. Install the separate `_worker-chunk-fix.js`
manually with the existing bindings. No UI, authentication, DNS, configuration,
sync, proxy selection, version or deployment setting is changed.

Validation:

```sh
node --test tests/chunk-fix.test.cjs
workerd test -I /path/to/node_modules tests/chunk-fix-runtime.capnp
```

The 14 Node checks cover exact source scope, 64 KiB boundaries, 256 KiB and
1 MiB payloads, offset views, errors, and VLESS/Trojan initial plus queued
uploads and large downloads with mock sockets. The regression fixture uses a
mock TCP sink that rejects writes larger than 64 KiB; it does not assert a
universal Cloudflare socket limit. The workerd test loads both Workers with
startup eval disabled and compares the dashboard responses exactly.

These are local correctness checks. Live throughput and the cause of any
remaining download slowdown require a deployed network test.
