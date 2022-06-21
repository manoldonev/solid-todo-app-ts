import { useNavigate } from 'solid-app-router';
import type { Component } from 'solid-js';
import { AddNewForm } from './AddNewForm';

const NewTask: Component = () => {
  const navigate = useNavigate();
  const onDismiss = (): void => navigate('/tasks');

  return (
    <div class="m-auto flex max-w-3xl flex-col bg-background px-5">
      <h1 id="label" class="py-4 text-on-surface">
        Add New Item
      </h1>
      <AddNewForm onSubmitted={onDismiss} onCancel={onDismiss} />
    </div>
  );
};

export { NewTask };
