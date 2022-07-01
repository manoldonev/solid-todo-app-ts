import { Route, Routes } from 'solid-app-router';
import type { Component } from 'solid-js';
import { createSignal, Show } from 'solid-js';
import { NewTask } from '../taskNew/NewTask';
import { NewTaskModal } from '../taskNew/NewTaskModal';
import { CtaButton } from './CtaButton';
import { Todos } from './Todos';

const Tasks: Component = () => {
  const [openDialog, setOpenDialog] = createSignal(false);

  return (
    <>
      <Routes>
        <Route
          path=""
          element={
            <>
              <Todos />
              {/* TODO: FAB accessibility and/or keyboard hotkey */}
              <CtaButton onClick={() => setOpenDialog(true)} class="fixed bottom-24 right-6 z-10 md:bottom-8" />
            </>
          }
        />

        <Route path="new" element={<NewTask />} />
      </Routes>

      {/* TODO: implement contextual modal navigation to open the modal dialog via route instead, see https://github.com/solidjs/solid-app-router/issues/129 */}
      <Show when={openDialog()}>
        <NewTaskModal open={openDialog()} onClose={() => setOpenDialog(false)} />
      </Show>
    </>
  );
};

export { Tasks };
