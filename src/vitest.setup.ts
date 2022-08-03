import 'regenerator-runtime/runtime';
import type { TestingLibraryMatchers } from '@testing-library/jest-dom/matchers';
import matchers from '@testing-library/jest-dom/matchers';
import 'whatwg-fetch';
import { afterAll, afterEach, beforeAll, expect } from 'vitest';
import { server } from './mocks/msw/server';
import './mocks/IntersectionObserver';
import './mocks/windowScrollTo';
import './mocks/SVGAElement';
import { injectTailwindCss } from './mocks/utils';
import MatchMediaMock from './mocks/windowMatchMedia';

beforeAll(async () => injectTailwindCss());

// Establish API mocking before all tests.
beforeAll(() => server.listen());

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());

// Clean up after the tests are finished.
afterAll(() => server.close());

// eslint-disable-next-line no-new
const matchMedia = new MatchMediaMock();

export { matchMedia };

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Vi {
    interface JestAssertion<T = any> extends jest.Matchers<void, T>, TestingLibraryMatchers<T, void> {}
  }
}

expect.extend(matchers);
