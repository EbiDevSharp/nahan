import baseline from 'baseline';
import fixed from 'fixed';

export default {
  async test() {
    const request = new Request('https://test.invalid/sync/dash');
    const original = await baseline.fetch(request.clone(),{},{});
    const updated = await fixed.fetch(request.clone(),{},{});
    if (original.status!==200 || updated.status!==200) throw new Error('Dashboard failed to load');
    if (await original.text()!==await updated.text()) throw new Error('Dashboard changed');
  }
};
