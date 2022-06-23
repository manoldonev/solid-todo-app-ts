import type { Component } from 'solid-js';
import { onCleanup, onMount } from 'solid-js';
import { useNavigate } from 'solid-app-router';
import { HiOutlineX as XIcon } from 'solid-icons/hi';
import { Portal } from 'solid-js/web';
import { enablePageScroll, disablePageScroll } from 'scroll-lock';
import { AddNewForm } from './AddNewForm';
import { clickOutside } from '../../directives/clickOutside';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const directiveNoTreeShake = clickOutside;

const NewTaskModal: Component = () => {
  let dialogElement: HTMLDialogElement | null;
  let titleElement: HTMLParagraphElement | null;
  const navigate = useNavigate();

  const closeAndGoBack = (): void => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    dialogElement?.close();
    navigate('/tasks');
  };

  onMount(() => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    dialogElement?.showModal();
    disablePageScroll();
  });

  onCleanup(() => {
    enablePageScroll();
  });

  return (
    <Portal>
      <dialog
        ref={dialogElement!}
        class="z-10 flex m-auto min-h-screen md:min-h-fit w-full max-w-3xl md:w-2/3 md:my-20 p-0"
      >
        <div use:clickOutside={closeAndGoBack} role="document" class="flex flex-col flex-1">
          <div class="flex-none flex items-center bg-primary px-8 pt-6 pb-4">
            <p
              id="title"
              ref={titleElement!}
              role="heading"
              aria-level={1}
              class="mr-auto bg-primary text-on-primary text-xl font-semibold"
            >
              Add New Item
            </p>
            <button type="button" onClick={closeAndGoBack} aria-label="Close">
              <XIcon class="h-10 w-10 text-on-primary" aria-hidden />
            </button>
          </div>

          <AddNewForm class="flex-grow md:flex-none px-8 py-8" onSubmitted={closeAndGoBack} onCancel={closeAndGoBack} />
        </div>
      </dialog>
    </Portal>
  );
};

export { NewTaskModal };
