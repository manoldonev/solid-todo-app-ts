import type { ParentComponent } from 'solid-js';
import { hideOnScroll } from './directives/hideOnScroll';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const directiveNoTreeShake = hideOnScroll;

const Legroom: ParentComponent<{ class?: string }> = (props) => {
  return (
    <div
      class={props.class}
      use:hideOnScroll={{
        headroomOptions: {
          classes: {
            initial: 'fixed inset-x-0 bottom-0 transition-transform duration-300 will-change-transform',
            pinned: 'translate-y-0',
            unpinned: 'translate-y-full',
          },
        },
      }}
    >
      {props.children}
    </div>
  );
};

export { Legroom };
