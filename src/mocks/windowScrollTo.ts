import { beforeAll } from 'vitest';

const setupWindowScrollToMock = (): void => {
  Object.defineProperty(window, 'scrollTo', {
    value: (_x: number, y: number) => {
      document.documentElement.scrollTop = y;
    },
    writable: true,
  });
};

beforeAll(() => setupWindowScrollToMock());
