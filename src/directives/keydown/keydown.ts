import type { Accessor } from 'solid-js';
import { onCleanup } from 'solid-js';

declare module 'solid-js' {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface Directives {
      keydown: (event: KeyboardEvent) => void;
    }
  }
}

const keydown = (_element: HTMLElement, accessor: Accessor<(event: KeyboardEvent) => void>): void => {
  const onKeydown = accessor();

  document.body.addEventListener('keydown', onKeydown);

  onCleanup(() => document.body.removeEventListener('keydown', onKeydown));
};

export { keydown };
