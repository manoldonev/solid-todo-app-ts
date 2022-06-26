import type { Component } from 'solid-js';
import { HiOutlinePlus as PlusIcon } from 'solid-icons/hi';
import { hideOnScroll } from '../../../components/Headroom';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const directiveNoTreeShake = hideOnScroll;

const CtaButton: Component<{
  class?: string;
  onClick: (
    event: MouseEvent & {
      currentTarget: HTMLButtonElement;
      target: Element;
    },
  ) => void;
}> = (props) => {
  return (
    <button
      data-testid="cta-button"
      use:hideOnScroll={{
        headroomOptions: {
          classes: {
            initial: 'transition-transform duration-300 will-change-transform',
            pinned: 'translate-x-0',
            unpinned: 'translate-x-[5rem]',
          },
        },
      }}
      type="button"
      aria-label="Add new item"
      onClick={(e) => props.onClick(e)}
      class={`h-14 w-14 rounded-full bg-secondary text-on-secondary shadow transition duration-200 ease-in hover:bg-secondary-variant focus:outline-none active:shadow-lg ${
        props.class ?? ''
      }`}
    >
      <PlusIcon class="h-5 w-full" />
    </button>
  );
};

export { CtaButton };
