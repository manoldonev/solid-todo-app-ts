import type { Component } from 'solid-js';
import { useModalContext } from '../../../components/Modal';
import { AddNewForm } from '../AddNewForm';

const ModalForm: Component = () => {
  const modalContext = useModalContext();

  return (
    <AddNewForm
      class="flex-grow md:flex-none px-8 py-8"
      onSubmit={modalContext.closeModal}
      onCancel={modalContext.closeModal}
    />
  );
};

export { ModalForm };
