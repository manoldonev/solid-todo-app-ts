import type {
  QueryFunction,
  QueryKey,
  QueryOptions,
  MutationOptions,
  MutationKey,
  MutationFunction,
} from '@tanstack/query-core';

export function isQueryKey(value: unknown): value is QueryKey {
  return typeof value === 'string' || Array.isArray(value);
}

export function parseQueryArgs<
  TOptions extends QueryOptions<any, any, any, TQueryKey>,
  TQueryKey extends QueryKey = QueryKey,
>(arg1: TQueryKey | TOptions, arg2?: QueryFunction<any, TQueryKey> | TOptions, arg3?: TOptions): TOptions {
  if (!isQueryKey(arg1)) {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    return arg1 as TOptions;
  }

  if (typeof arg2 === 'function') {
    return { ...arg3, queryKey: arg1, queryFn: arg2 } as TOptions;
  }

  return { ...arg2, queryKey: arg1 } as TOptions;
}

export function parseMutationArgs<TOptions extends MutationOptions<any, any, any, any>>(
  arg1: MutationKey | MutationFunction<any, any> | TOptions,
  arg2?: MutationFunction<any, any> | TOptions,
  arg3?: TOptions,
): TOptions {
  if (isQueryKey(arg1)) {
    if (typeof arg2 === 'function') {
      return { ...arg3, mutationKey: arg1, mutationFn: arg2 } as TOptions;
    }
    return { ...arg2, mutationKey: arg1 } as TOptions;
  }

  if (typeof arg1 === 'function') {
    return { ...arg2, mutationFn: arg1 } as TOptions;
  }

  return { ...arg1 };
}

export function noop(): undefined {
  return undefined;
}
