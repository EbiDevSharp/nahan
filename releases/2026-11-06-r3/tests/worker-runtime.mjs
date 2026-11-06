import original from 'original';
import obfuscated from 'obfuscated';

export default {
  async test() {
    let expectedScript;
    let expectedPage;
    for (const worker of [original, obfuscated]) {
      const asset = await worker.fetch(new Request('https://test.invalid/sync/assets/dashboard.js'),{},{});
      if (asset.status!==200 || asset.headers.get('X-Nahan-UI-Build')!=='20261106-r3') throw new Error('Dashboard asset failed');
      const script = await asset.text();
      if (!script.includes('function doLogin(')) throw new Error('Login definition missing');
      const response = await worker.fetch(new Request('https://test.invalid/sync/dash'),{},{});
      if (response.status!==200) throw new Error('Dashboard page failed: '+response.status);
      const page = await response.text();
      if (!page.includes('assets/dashboard.js')) throw new Error('Dashboard client reference missing');
      if (expectedScript!==undefined && script!==expectedScript) throw new Error('Obfuscation changed dashboard script');
      if (expectedPage!==undefined && page!==expectedPage) throw new Error('Obfuscation changed dashboard HTML');
      expectedScript = script;
      expectedPage = page;
    }
  }
};
