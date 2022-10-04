/* @refresh reload */
import { QueryClientProvider } from '@tanstack/solid-query';
import { Router } from '@solidjs/router';
import { render } from 'solid-js/web';
import { Toaster } from 'solid-toast';
import { App } from './App';
import './index.css';
import { queryClient } from './queryClient';

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
        <Router base={import.meta.env.BASE_URL}>
          <App />
        </Router>
        <Toaster position="top-center" />
      </QueryClientProvider>
    ),
    container,
  );
};

// eslint-disable-next-line @typescript-eslint/no-floating-promises
main();
