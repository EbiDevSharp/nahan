/* Static module obfuscation: never generate a runtime eval/Function loader. */
(function (root) {
    'use strict';
    const legacy = root.NahanWorkerObfuscator;
    function parse(source) {
        return root.acorn.parse(source, {ecmaVersion:'latest',sourceType:'module'});
    }
    function toBase64(bytes) {
        let binary = '';
        for (let i=0; i<bytes.length; i+=32768) binary += String.fromCharCode(...bytes.subarray(i,i+32768));
        return root.btoa(binary);
    }
    function fromBase64(value) {
        return Uint8Array.from(root.atob(value), character => character.charCodeAt(0));
    }
    async function obfuscate(source, key, recoverable = true) {
        parse(source);
        if (!root.Terser) throw new Error('Static JavaScript compiler is unavailable.');
        // Avoid optimizations that could change behavior. Property names and
        // embedded HTML/client source remain intact; only JS identifiers change.
        const result = await root.Terser.minify(source, {
            module:true,
            compress:false,
            mangle:{toplevel:true},
            format:{comments:false,ascii_only:false}
        });
        if (!result.code) throw new Error('The compiler returned no code.');
        parse(result.code);
        let output = '// Nahan static obfuscator v4 - no dynamic loader\n' + result.code + '\n';
        if (recoverable) {
            const keyBytes = key || legacy.hexKey();
            if (!(keyBytes instanceof Uint8Array) || !keyBytes.length) throw new Error('Invalid XOR key.');
            const original = new TextEncoder().encode(source);
            const payload = toBase64(original.map((byte,i) => byte ^ keyBytes[i % keyBytes.length]));
            const keyHex = Array.from(keyBytes,byte=>byte.toString(16).padStart(2,'0')).join('');
            // This optional backup is a comment. It is NEVER decoded/executed by
            // the Worker, and XOR is not protection for secrets.
            output += '/* NahanSourceV4 ' + JSON.stringify({version:4,keyHex,payload}) + ' */\n';
        }
        return output;
    }
    function deobfuscate(source) {
        const match = source.match(/\/\* NahanSourceV4 (\{[^\n]*\}) \*\/\s*$/);
        if (!match) {
            if (source.startsWith('// Nahan static obfuscator v4')) throw new Error('این خروجی بدون نسخهٔ بازگردانی ساخته شده است.');
            return legacy.deobfuscate(source);
        }
        const metadata = JSON.parse(match[1]);
        if (metadata.version!==4 || !/^(?:[0-9a-f]{2})+$/i.test(metadata.keyHex) || typeof metadata.payload!=='string') throw new Error('Invalid source backup.');
        const key = Uint8Array.from(metadata.keyHex.match(/../g),byte=>parseInt(byte,16));
        const bytes = fromBase64(metadata.payload).map((byte,i)=>byte^key[i%key.length]);
        const original = new TextDecoder('utf-8',{fatal:true}).decode(bytes);
        parse(original);
        return original;
    }
    root.NahanWorkerObfuscator = {obfuscate,deobfuscate,hexKey:legacy.hexKey};
})(globalThis);
