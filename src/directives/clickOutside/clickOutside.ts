import type { Accessor } from 'solid-js';
import { onCleanup } from 'solid-js';

declare module 'solid-js' {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface Directives {
      clickOutside: () => void;
    }
  }
}

const clickOutside = (element: HTMLElement, accessor: Accessor<() => void>): void => {
  const onClick = (e: Event): void => {
    if (!element.contains(e.target as Node)) {
      accessor()();
    }
  };

  document.body.addEventListener('click', onClick);

  onCleanup(() => document.body.removeEventListener('click', onClick));
};

export { clickOutside };
