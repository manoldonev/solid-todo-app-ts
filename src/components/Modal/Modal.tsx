import { createMediaQuery } from '@solid-primitives/media';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';
import type { ParentComponent } from 'solid-js';
import { createUniqueId, onCleanup, onMount } from 'solid-js';
import { motion } from '@motionone/solid';
import { createStore } from 'solid-js/store';
import { Portal } from 'solid-js/web';
import dialogPolyfill from 'dialog-polyfill';
import { clickOutside, keydown } from '../../directives';
import type { ModalContextValue, ModalState } from './ModalProvider';
import { ModalProvider } from './ModalProvider';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const clickOutsideNoTreeShake = clickOutside;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const keydownNoTreeShake = keydown;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const motionNoTreeShake = motion;

export interface ModalProps {
  id?: string;
  ref?: (element: HTMLDialogElement) => void;
  onClose?: () => void;
  lockScrollOnMount?: boolean;
  closeOnBackdropClick?: boolean;
}

// TODO: focus restore, see https://gist.github.com/samthor/babe9fad4a65625b301ba482dad284d1
const Modal: ParentComponent<ModalProps> = (props) => {
  let dialogElement: HTMLDialogElement;
  const isLargeScreen = createMediaQuery('(min-width: 768px)');
  const closeModal = (): void => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    dialogElement!.close();
  };

  const onClose = (): void => {
    props.onClose?.();
  };

  const refPassthrough = (element: HTMLElement): void => {
    dialogElement = element as HTMLDialogElement;
    props.ref?.(dialogElement);
  };

  onMount(async () => {
    // NOTE: dialog polyfill primarily for testing as neither jsdom, nor happy-dom support the HTMLDialogElment API properly
    dialogPolyfill.registerDialog(dialogElement);

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    dialogElement.showModal();

    if (props.lockScrollOnMount ?? true) {
      disablePageScroll();
    }

    dialogElement.addEventListener('close', onClose);
  });

  onCleanup(() => {
    if (props.lockScrollOnMount ?? true) {
      enablePageScroll();
    }

    dialogElement.removeEventListener('close', onClose);
  });

  const [state] = createStore<ModalState>({
    get dialogId() {
      return props.id ?? createUniqueId();
    },
    get titleId() {
      return `${this.dialogId}--title`;
    },
  });

  const modalContext: ModalContextValue = {
    state,
    closeModal,
  };

  return (
    <ModalProvider value={modalContext}>
      <Portal>
        <dialog
          id={state.dialogId}
          ref={refPassthrough}
          class="backdrop:bg-[#2b2e38]/70 flex m-auto min-h-full md:min-h-fit w-full max-w-3xl md:w-2/3 p-0"
          use:motion={{
            animate: isLargeScreen() ? { opacity: [0, 1] } : undefined,
            transition: { duration: 0.3, easing: 'ease-in-out' },
          }}
          aria-labelledby={state.titleId}
          aria-modal={true}
        >
          <div
            role="document"
            class="flex flex-col flex-1"
            use:clickOutside={() => {
              if (props.closeOnBackdropClick ?? true) {
                closeModal();
              }
            }}
          >
            {props.children}
          </div>
        </dialog>
      </Portal>
    </ModalProvider>
  );
};

export { Modal };
