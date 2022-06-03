import { QueryClient, setLogger } from 'react-query/core';
import { render, screen } from 'solid-testing-library';
import { QueryClientProvider } from '../solid-query';
import { App } from './App';

setLogger({
  // eslint-disable-next-line no-console
  log: console.log,
  // eslint-disable-next-line no-console
  warn: console.warn,
  error: () => {},
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      cacheTime: Infinity,
    },
  },
});

describe('Todo App', () => {
  test('renders correctly', async () => {
    const { unmount } = render(() => (
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    ));

    expect(screen.getByText(/todo app/i)).toBeInTheDocument();

    // eslint-disable-next-line testing-library/no-wait-for-empty-callback
    // await waitFor(() => {});

    unmount();
  });
});
