import { beforeAll } from 'vitest';

beforeAll(() => {
  class MockSVGAElement {}

  Object.defineProperty(window, 'SVGAElement', {
    writable: true,
    configurable: true,
    value: MockSVGAElement,
  });
});
