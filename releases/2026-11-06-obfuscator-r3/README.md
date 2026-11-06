# Nahan obfuscator r3 — 2026-11-06

**Superseded:** This archived loader uses `new Function` and can fail on Workers
with startup eval disabled. Use `../2026-11-06-obfuscator-r4/mobhamsaziv4.html`.
The previously missing uploaded Worker has since been recovered and is included
in `../2026-11-06-r3/` with a static v4 build. The notes below describe the
original recovery state of this archive.

This release contains the recovered, corrected `mobhamsaziv2.html` only.
Download the HTML file and open it locally to use the obfuscator.

The tool parses JavaScript module declarations before transforming imports and
the default export. Text such as `export default` inside strings and embedded
HTML is preserved. Deobfuscation restores the original source.

**Worker status:** The revised Worker source and previously generated obfuscated
Worker from the earlier review could not be recovered from the temporary
workspace. They are not included in this release. The repository's root
`_worker.js`, version file and deployment settings remain unchanged. This is
not a release of the reported transport, login or linked-panel fixes.

Validation: run `node releases/2026-11-06-obfuscator-r3/verify.cjs` from the
repository root. The checks cover inline JavaScript syntax, exact round-trip
of the existing repository Worker, and module conversion with string literals,
HTML, named default declarations and import bindings. These checks do not
confirm Cloudflare deployment or network throughput.
