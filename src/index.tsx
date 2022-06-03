/* @refresh reload */
import { QueryClient } from 'react-query/core';
import { render } from 'solid-js/web';
import { App } from './App';

import './index.css';
import { QueryClientProvider } from './solid-query/QueryClientProvider';

const queryClient = new QueryClient();

const main = async (): Promise<void> => {
  if (import.meta.env.VITE_API_MOCKING === 'enabled') {
    const { worker } = await import('./mocks/msw/browser');
    await worker.start({
      serviceWorker: {
        url: `${import.meta.env.BASE_URL}mockServiceWorker.js`,
      },
      onUnhandledRequest: ({ url }, print) => {
        if (!url.pathname.startsWith('/graphql')) {
          return;
        }

        print.error();
      },
    });
  }

  const container = document.getElementById('root');
  if (container == null) {
    return;
  }

  render(
    () => (
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    ),
    container,
  );
};

// eslint-disable-next-line @typescript-eslint/no-floating-promises
main();
