import type { Component } from 'solid-js';
import { ModalTitle, ModalCloseButton } from '../../../components/Modal';

const ModalHeader: Component<{ title: string }> = (props) => {
  return (
    <div class="flex items-center bg-primary px-8 pt-6 pb-4">
      <ModalTitle class="mr-auto bg-primary text-on-primary text-xl font-semibold">{props.title}</ModalTitle>
      <ModalCloseButton class="text-on-primary" />
    </div>
  );
};

export { ModalHeader };
