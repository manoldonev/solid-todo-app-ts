import type { QueryObserver, QueryKey, QueryObserverResult } from 'react-query/core';
import type { UseBaseQueryOptions, UseQueryResult } from 'react-query/types';

import { onMount, onCleanup } from 'solid-js';
import { createStore, reconcile } from 'solid-js/store';
import { useQueryClient } from './QueryClientProvider';

export type UseQueryReturnType<TData, TError, Result = UseQueryResult<TData, TError>> = Readonly<Result>;

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useBaseQuery = <TQueryFnData, TError, TData, TQueryData, TQueryKey extends QueryKey>(
  options: UseBaseQueryOptions<TQueryFnData, TError, TData, TQueryData, TQueryKey>,
  Observer: typeof QueryObserver,
) => {
  const queryClient = useQueryClient();
  const defaultedOptions = queryClient.defaultQueryObserverOptions(options);

  // Make sure results are optimistically set in fetching state before subscribing or updating options
  defaultedOptions.optimisticResults = true;

  const observer = new Observer(queryClient, defaultedOptions);
  const [state, setState] = createStore<QueryObserverResult<TData, TError>>(
    observer.getOptimisticResult(defaultedOptions),
  );

  // Update result to make sure we did not miss any query updates
  // between creating the observer and subscribing to it.
  observer.updateResult();

  const unsubscribe = observer.subscribe((result) => {
    const reconciledResult = reconcile(result);
    setState(reconciledResult);
  });

  onCleanup(() => unsubscribe());

  onMount(() => {
    // Do not notify on updates because of changes in the options because
    // these changes should already be reflected in the optimistic result.
    observer.setOptions(defaultedOptions, { listeners: false });
  });

  return state;
};
