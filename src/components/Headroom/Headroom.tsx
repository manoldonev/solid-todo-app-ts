import type { ParentComponent } from 'solid-js';
import { hideOnScroll } from './directives/hideOnScroll';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const directiveNoTreeShake = hideOnScroll;

const Headroom: ParentComponent<{ class?: string }> = (props) => {
  return (
    <div
      class={props.class}
      use:hideOnScroll={{
        headroomOptions: {
          classes: {
            initial: 'transition-transform duration-300 will-change-transform',
            pinned: 'sticky top-0 translate-y-0',
            unpinned: 'fixed -translate-y-full',
            top: '!relative',
          },
        },
        autoCalculateOffset: true,
        disableInitialTransitionToUnpinned: true,
      }}
    >
      {props.children}
    </div>
  );
};

export { Headroom };
