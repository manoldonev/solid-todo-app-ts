import type { Component } from 'solid-js';
import { onCleanup, onMount } from 'solid-js';
import { useNavigate } from 'solid-app-router';
import { HiOutlineX as XIcon } from 'solid-icons/hi';
import { Portal } from 'solid-js/web';
import { enablePageScroll, disablePageScroll } from 'scroll-lock';
import { motion } from '@motionone/solid';
import { createMediaQuery } from '@solid-primitives/media';
import { AddNewForm } from './AddNewForm';
import { clickOutside, keydown } from '../../directives';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const clickOutsideNoTreeShake = clickOutside;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const keydownNoTreeShake = keydown;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const motionNoTreeShake = motion;

const NewTaskModal: Component = () => {
  let dialogElement: HTMLDialogElement | null;
  let titleElement: HTMLParagraphElement | null;
  const isLargeScreen = createMediaQuery('(min-width: 768px)');
  const navigate = useNavigate();
  const goBack = (): void => navigate('/tasks');
  const closeAndGoBack = (): void => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    dialogElement?.close();
    goBack();
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
        class="backdrop:bg-[#2b2e38]/70 flex m-auto min-h-screen md:min-h-fit w-full max-w-3xl md:w-2/3 p-0"
        use:motion={{
          animate: isLargeScreen() ? { opacity: [0, 1] } : undefined,
          transition: { duration: 0.3, easing: 'ease-in-out' },
        }}
        aria-labelledby={titleElement!.id}
        aria-modal={true}
      >
        <div
          role="document"
          class="flex flex-col flex-1"
          use:clickOutside={closeAndGoBack}
          use:keydown={(event) => {
            // the default Escape action is triggered on keydown as well
            if (event.key === 'Escape') {
              goBack();
            }
          }}
        >
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
