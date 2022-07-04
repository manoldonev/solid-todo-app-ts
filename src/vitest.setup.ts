import 'regenerator-runtime/runtime';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import 'whatwg-fetch';
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
