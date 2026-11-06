# Nahan Worker r3 — 2026-11-06

The uploaded `New Text Document.txt` is preserved byte-for-byte as `_worker.js`.
Its application version is `3.0.0` and dashboard build is `20261106-r3`.

- `_worker.js`: original uploaded Worker source.
- `_worker-obfuscated.js`: a static module built from that exact source using
  `../2026-11-06-obfuscator-r4/mobhamsaziv4.html`. This build renames JavaScript
  identifiers without a runtime `new Function`/`eval` loader. An optional XOR
  backup in a comment supports exact source recovery; it never executes.
- `SHA256SUMS`: SHA-256 checksums for the two Worker files.

Choose either Worker file when installing manually. Keep the existing Worker
bindings and environment configuration. This is an archived release folder;
the root `_worker.js`, root `version`, updater defaults and deployment settings
are unchanged. Installing this version requires selecting its file explicitly.

The source includes the separated dashboard client, 64 KiB upload writes,
connection timeout and queue handling, linked-panel repair, and protection of
private configuration fields during shared sync.

Run `node releases/2026-11-06-r3/verify.cjs` from the repository root to check
Worker initialization, dashboard script syntax and login declaration, the
dashboard asset response, upload chunk size and byte order, private sync field
filtering, exact obfuscator round-trip, and obfuscated loader initialization.
Use `--build` to regenerate the obfuscated file with a fresh random XOR key.

The old r3 dynamic loader was reproduced failing in `workerd` with the
repository's `2024-03-01` compatibility date: `EvalError: Code generation from
strings disallowed for this context`. The static build passes the runtime
test at that date with `disallow_eval_during_startup` explicitly enabled.

To repeat the runtime test, install `workerd` and run:

```sh
workerd test -I /path/to/node_modules releases/2026-11-06-r3/tests/worker-runtime.capnp
```

This loads both the original and obfuscated modules in the Workers runtime,
requests the dashboard and client asset, and compares their responses exactly.

These are local checks performed for this recovered upload. The previously
reported 52 tests are not included or reasserted here. Production Cloudflare deployment,
live login, throughput and v2rayNG Real Delay remain unverified for this upload.
