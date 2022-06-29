import type { Component } from 'solid-js';
import { Modal } from '../../../components/Modal';
import { ModalHeader } from './ModalHeader';
import { ModalForm } from './ModalForm';

const NewTaskModal: Component<{ onClose?: () => void }> = (props) => {
  return (
    <Modal onClose={() => props.onClose?.()}>
      <ModalHeader title="Add New Item" />
      <ModalForm />
    </Modal>
  );
};

export { NewTaskModal };
