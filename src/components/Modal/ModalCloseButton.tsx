import type { Component } from 'solid-js';
import { HiOutlineX as XIcon } from 'solid-icons/hi';
import { useModalContext } from './ModalProvider';
import type { ClassProps } from '../../types';

const ModalCloseButton: Component<ClassProps> = (props) => {
  const modalContext = useModalContext();

  return (
    <button type="button" class={props.class} onClick={modalContext.closeModal} aria-label="Close">
      <XIcon class="h-10 w-10" aria-hidden />
    </button>
  );
};

export { ModalCloseButton };
