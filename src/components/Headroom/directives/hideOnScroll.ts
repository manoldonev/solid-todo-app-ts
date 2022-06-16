/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment */
import type { Accessor } from 'solid-js';
import { onMount, onCleanup } from 'solid-js';
import Headroom from 'headroom.js';
import type { HeadroomOptions } from 'headroom.js';

export interface HideOnScrollOptions {
  headroomOptions: HeadroomOptions;
  autoCalculateOffset?: boolean;
  disableInitialTransitionToUnpinned?: boolean;
}

declare module 'solid-js' {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface Directives {
      hideOnScroll: HideOnScrollOptions;
    }
  }
}

const hideOnScroll = (element: HTMLElement, accessor: Accessor<HideOnScrollOptions>): void => {
  const { autoCalculateOffset, disableInitialTransitionToUnpinned, headroomOptions } = accessor();

  const options =
    autoCalculateOffset ?? false
      ? { ...headroomOptions, offset: { up: 0, down: element.offsetHeight } }
      : headroomOptions;

  /* HACK: Do not add CSS transitions until after we are done with the initial negative transform when transitioning from 'unfixed' to 'unpinned'; otherwise the header flashes into view temporarily while transitioning from 0 to -100% */
  if (disableInitialTransitionToUnpinned ?? false) {
    const userUnpinnedClassName = options.classes?.unpinned;
    const userOnTop = options.onTop;
    options.onTop = function onTop(this) {
      (this as any).classes.unpinned = `transition-none ${userUnpinnedClassName?.replace('fixed', '').trim() ?? ''}`;

      if (userOnTop) {
        userOnTop.call(this);
      }
    };

    const userOnPin = options.onPin;
    options.onPin = function onPin(this) {
      (this as any).classes.unpinned = `${userUnpinnedClassName ?? ''}`;

      if (userOnPin) {
        userOnPin.call(this);
      }
    };
  }

  const headroom = new Headroom(element, options);

  // HACK: init/destroy race condition upon test execution
  // see https://github.com/WickyNilliams/headroom.js/issues/367
  const unsafeHeadroom = <any>headroom;
  if (unsafeHeadroom.scrollTracker == null) {
    unsafeHeadroom.scrollTracker = {
      destroy: () => {},
    };
  }

  onMount(() => headroom.init());

  onCleanup(() => headroom.destroy());
};

export { hideOnScroll };
/* eslint-enable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment */
