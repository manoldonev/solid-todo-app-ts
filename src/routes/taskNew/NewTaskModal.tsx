import type { Component } from 'solid-js';
import { useNavigate } from 'solid-app-router';
import {
  createDisclosure,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@hope-ui/solid';
import createMediaQuery from '@solid-primitives/media';
import { AddNewForm } from './AddNewForm';

const NewTaskModal: Component = () => {
  const isLargeScreen = createMediaQuery('(min-width: 768px)');
  const navigate = useNavigate();

  const { isOpen, onClose } = createDisclosure({
    isOpen: true,
    onClose: () => {
      navigate('/tasks');
    },
  });

  return (
    <>
      <Modal data-testid="add-new-modal" size={isLargeScreen() ? '3xl' : 'full'} opened={isOpen()} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalHeader class="bg-primary text-on-primary">
            <h1>Add New Item</h1>
          </ModalHeader>
          <ModalBody class="bg-background text-on-primary px-8 pt-6 pb-8">
            <AddNewForm onSubmitted={onClose} onCancel={onClose} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export { NewTaskModal };
