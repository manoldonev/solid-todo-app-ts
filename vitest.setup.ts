import 'regenerator-runtime/runtime';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import 'whatwg-fetch';

// TODO: investigate why msw setup in node environment breaks testing
// import { server } from './mocks/msw/server';

// // Establish API mocking before all tests.
// beforeAll(() => server.listen());

// // Reset any request handlers that we may add during the tests,
// // so they don't affect other tests.
// afterEach(() => server.resetHandlers());

// // Clean up after the tests are finished.
// afterAll(() => server.close());

// jest.mock('solid-icons/hi', () => {
//   return {
//     HiOutlineEmojiSad: () => null,
//     HiOutlineBell: () => null,
//     HiOutlineColorSwatch: () => null,
//     HiOutlinePencilAlt: () => null,
//     HiOutlineTrash: () => null,
//   };
// });

// jest.mock('solid-icons/ai', () => {
//   return {
//     AiOutlineLoading: () => {
//       return null;
//     },
//   };
// });
