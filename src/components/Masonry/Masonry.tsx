import type { ParentComponent } from 'solid-js';
import { onMount, onCleanup } from 'solid-js';
import Masonry from 'masonry-layout';
import { Dynamic } from 'solid-js/web';

interface MasonryProps {
  options?: Masonry.Options;
  elementType?: string;
  class?: string;
}

const MasonryComponent: ParentComponent<MasonryProps> = (props) => {
  let masonry: Masonry;
  let masonryContainer: HTMLElement;

  onMount(() => {
    masonry = new Masonry(masonryContainer, props.options);
  });

  onCleanup(() => {
    if (masonry.destroy) {
      masonry.destroy();
    }
  });

  return (
    <Dynamic
      component={props.elementType ?? 'div'}
      class={props.class}
      ref={(element: HTMLElement) => {
        masonryContainer = element;
      }}
    >
      {props.children}
    </Dynamic>
  );
};

export { MasonryComponent as Masonry };
