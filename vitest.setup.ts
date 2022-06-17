import { afterAll, afterEach, beforeAll } from 'vitest';
import 'regenerator-runtime/runtime';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import 'whatwg-fetch';
import { server } from './src/mocks/msw/server';
import './src/mocks/IntersectionObserver';
import './src/mocks/windowScrollTo';
import './src/mocks/SVGAElement';
import { injectTailwindCss } from './src/mocks/utils';

beforeAll(async () => injectTailwindCss());

// Establish API mocking before all tests.
beforeAll(() => server.listen());

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());

// Clean up after the tests are finished.
afterAll(() => server.close());
