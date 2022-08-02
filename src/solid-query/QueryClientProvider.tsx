import type { QueryClient } from '@tanstack/query-core';
import type { ParentComponent } from 'solid-js';
import { createContext, onMount, onCleanup, useContext } from 'solid-js';

const QueryClientContext = createContext<QueryClient>();

const QueryClientProvider: ParentComponent<{ client: QueryClient }> = (props) => {
  onMount(() => props.client.mount());
  onCleanup(() => props.client.unmount());

  return <QueryClientContext.Provider value={props.client}>{props.children}</QueryClientContext.Provider>;
};

const useQueryClient = (): QueryClient => {
  const queryClient = useContext(QueryClientContext);
  if (!queryClient) {
    throw new Error('No QueryClient set, use QueryClientProvider to set one');
  }

  return queryClient;
};

export { QueryClientProvider, QueryClientContext, useQueryClient };
