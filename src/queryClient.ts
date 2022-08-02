import { QueryClient, QueryCache } from '@tanstack/query-core';
import toast from 'solid-toast';

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error) =>
      toast.error(`Something went wrong: ${(error as Error).message}`, {
        ariaProps: {
          role: 'status',
          'aria-live': 'polite',
        },
      }),
  }),
});

export { queryClient };
