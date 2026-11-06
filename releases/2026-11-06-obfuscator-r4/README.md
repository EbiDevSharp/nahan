# Nahan static obfuscator v4 — 2026-11-06

Download `mobhamsaziv4.html` and open it locally. The compiler is embedded in the
HTML. No compiler CDN or build service is required; Tailwind and fonts are
optional external presentation dependencies.

The previous v3 loader executed a decoded string through `new Function`. This
fails when eval during startup is disabled, including the repository's
`2024-03-01` compatibility date. The v4 output is a normal ES module: imports and
exports remain static. Terser 5.51.2 renames JavaScript identifiers; compression
optimizations and property mangling are disabled to preserve behavior and
embedded HTML/client code.

The checked recovery option stores the original source as XOR/base64 data in a
comment. That comment never executes. The embedded key makes it reversible;
this is source obfuscation, not encryption for secrets. Uncheck recovery to
make a smaller output. Source/key recovery also accepts v3 loader files.

The GitHub button fetches the archived uploaded r3 Worker, not the unchanged
root Worker. The original uploaded source and generated static output are in
`../2026-11-06-r3/`.

Local validation includes JavaScript/HTML-script syntax, exact source recovery,
and both raw/static Workers loading in `workerd` with startup eval disabled.
See the release's `verify.cjs` and `tests/worker-runtime.capnp`.

References:

- https://developers.cloudflare.com/workers/configuration/compatibility-flags/#enable-eval-during-startup
- https://terser.org/docs/options/

The standalone file includes Acorn and Terser; their license texts are provided
alongside it. `engine.js` is the v4 wrapper embedded in the standalone HTML.
