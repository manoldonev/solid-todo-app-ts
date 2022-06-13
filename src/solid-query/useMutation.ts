import { MutationObserver } from 'react-query/core';
import type { UseMutateFunction, UseMutationOptions, UseMutationResult } from 'react-query/types';
import type { MutationKey, MutationFunction } from 'react-query/core';
import { onCleanup, onMount } from 'solid-js';
import { createStore, reconcile } from 'solid-js/store';
import { useQueryClient } from './QueryClientProvider';
import { noop, parseMutationArgs } from './utils';

export function useMutation<TData = unknown, TError = unknown, TVariables = void, TContext = unknown>(
  options: UseMutationOptions<TData, TError, TVariables, TContext>,
): UseMutationResult<TData, TError, TVariables, TContext>;
export function useMutation<TData = unknown, TError = unknown, TVariables = void, TContext = unknown>(
  mutationFn: MutationFunction<TData, TVariables>,
  options?: Omit<UseMutationOptions<TData, TError, TVariables, TContext>, 'mutationFn'>,
): UseMutationResult<TData, TError, TVariables, TContext>;
export function useMutation<TData = unknown, TError = unknown, TVariables = void, TContext = unknown>(
  mutationKey: MutationKey,
  options?: Omit<UseMutationOptions<TData, TError, TVariables, TContext>, 'mutationKey'>,
): UseMutationResult<TData, TError, TVariables, TContext>;

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function useMutation<TData = unknown, TError = unknown, TVariables = void, TContext = unknown>(
  arg1: MutationKey | MutationFunction<TData, TVariables> | UseMutationOptions<TData, TError, TVariables, TContext>,
  arg2?: MutationFunction<TData, TVariables> | UseMutationOptions<TData, TError, TVariables, TContext>,
  arg3?: UseMutationOptions<TData, TError, TVariables, TContext>,
) {
  const options = parseMutationArgs(arg1, arg2, arg3);
  const queryClient = useQueryClient();

  const observer = new MutationObserver<TData, TError, TVariables, TContext>(queryClient, options);

  const currentResult = observer.getCurrentResult();

  const mutate: UseMutateFunction<TData, TError, TVariables, TContext> = (variables, mutateOptions) => {
    observer.mutate(variables, mutateOptions).catch(noop);
  };

  const [state, setState] = createStore<UseMutationResult<TData, TError, TVariables, TContext>>({
    ...currentResult,
    mutate,
    mutateAsync: currentResult.mutate,
  });

  onMount(() => {
    observer.setOptions(options);
  });

  const unsubscribe = observer.subscribe((result) => {
    if (result.error != null) {
      throw new Error('mutation error');
    }

    const reconciledResult = reconcile(result);
    setState(reconciledResult);
  });

  onCleanup(() => unsubscribe());

  return state;
}
