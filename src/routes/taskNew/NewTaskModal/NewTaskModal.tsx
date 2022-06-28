import type { Component } from 'solid-js';
import { AddNewForm } from '../AddNewForm';
import { Modal } from '../../../components/Modal';
import { ModalHeader } from './ModalHeader';

const NewTaskModal: Component<{ onClose?: () => void }> = (props) => {
  let dialogElement: HTMLDialogElement;
  const closeModal = (): void => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    dialogElement.close();
  };

  return (
    <Modal
      ref={(element) => {
        dialogElement = element;
      }}
      onClose={() => props.onClose?.()}
    >
      <ModalHeader title="Add New Item" />
      <AddNewForm class="flex-grow md:flex-none px-8 py-8" onSubmit={closeModal} onCancel={closeModal} />
    </Modal>
  );
};

export { NewTaskModal };
