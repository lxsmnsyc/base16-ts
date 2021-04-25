import { schemes } from '../src';

describe('schemes', () => {
  Object.entries(schemes).forEach(([key, value]) => {
    describe(key, () => {
      Object.entries(value).forEach(([k, v]) => {
        if (k.startsWith('base')) {
          describe(k, () => {
            it('should be a valid color scheme', () => {
              expect(v).toMatch(/^#[0-9A-Fa-f]{6}$/i);
            });
          });
        }
      });
    });
  });
});
