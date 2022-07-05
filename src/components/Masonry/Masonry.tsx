import type { ParentComponent } from 'solid-js';
import { Dynamic } from 'solid-js/web';
import { onMount, onCleanup } from 'solid-js';
import Masonry from 'masonry-layout';
import { createMutationObserver } from '@solid-primitives/mutation-observer';
import type { ClassProps } from '../../types';

export interface MasonryProps extends ClassProps {
  options?: Masonry.Options;
  as?: string;
}

const MasonryComponent: ParentComponent<MasonryProps> = (props) => {
  let masonry: Masonry;
  let containerRef: HTMLElement;

  const diffDomChildren = (
    mutations: MutationRecord[],
  ): {
    prepended: Element[];
    appended: Element[];
    removed: Element[];
    shouldReloadItems: boolean;
  } => {
    let shouldReloadItems = false;

    // we know the generic NodeList actually contains Element nodes as we are using the "childList" strategy for the DOM mutation observer
    const prepended: Element[] = [];
    const appended: Element[] = [];
    const removed: Element[] = [];
    mutations.forEach((mutation) => {
      // NOTE: we assume nodes are either prepended, or appended -- no inserts
      if (mutation.addedNodes.length > 0) {
        if (mutation.previousSibling == null) {
          prepended.push(...([...mutation.addedNodes] as Element[]));
        } else {
          // assume everything else is appended
          appended.push(...([...mutation.addedNodes] as Element[]));
        }
      } else if (mutation.removedNodes.length > 0) {
        removed.push(...([...mutation.removedNodes] as Element[]));

        // force items reload to notify Masonry of removed items if removing any other item(s) but the last one(s)
        if (mutation.nextSibling != null) {
          shouldReloadItems = true;
        }
      }

      return true;
    });

    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    shouldReloadItems = shouldReloadItems || prepended.length > 0;

    return {
      prepended,
      appended,
      removed,
      shouldReloadItems,
    };
  };

  const performLayout = (mutations: MutationRecord[]): void => {
    const { prepended, appended, shouldReloadItems } = diffDomChildren(mutations);

    if (appended.length > 0) {
      masonry.appended?.(appended);
    }

    if (prepended.length > 0) {
      masonry.prepended?.(prepended);
    }

    if (shouldReloadItems) {
      masonry.reloadItems?.();
    }

    masonry.layout?.();
  };

  onMount(() => {
    masonry = new Masonry(containerRef, props.options);
  });

  onCleanup(() => {
    masonry.destroy?.();
  });

  createMutationObserver(
    () => containerRef,
    { childList: true },
    (mutations) => performLayout(mutations),
  );

  return (
    <Dynamic component={props.as ?? 'div'} class={props.class} ref={containerRef!}>
      {props.children}
    </Dynamic>
  );
};

export { MasonryComponent as Masonry };
