import { createVisibilityObserver } from '@solid-primitives/intersection-observer';
import type { Accessor } from 'solid-js';
import { createEffect } from 'solid-js';

const DEFAULT_ROOT_MARGIN = '0px 0px 0px 0px';
const DEFAULT_THRESHOLD = 0;

interface InfiniteScrollOptions {
  isLoading: Accessor<boolean>;
  isDisabled?: Accessor<boolean>;
  hasNextPage: Accessor<boolean>;
  fetchNextPage: VoidFunction;
  rootMargin?: string;
  threshold?: number | number[];
}

declare module 'solid-js' {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface Directives {
      infiniteScroll: InfiniteScrollOptions;
    }
  }
}

const infiniteScroll = (element: Element, accessor: Accessor<InfiniteScrollOptions>): void => {
  const options = accessor();
  const [isSentryVisible] = createVisibilityObserver(() => element, {
    rootMargin: options.rootMargin ?? DEFAULT_ROOT_MARGIN,
    threshold: options.threshold ?? DEFAULT_THRESHOLD,
  });

  createEffect(() => {
    if (isSentryVisible() && !options.isLoading() && options.isDisabled?.() === false && options.hasNextPage()) {
      options.fetchNextPage();
    }
  });
};

export type { InfiniteScrollOptions };
export { infiniteScroll };
