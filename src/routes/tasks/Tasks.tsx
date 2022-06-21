import { Route, Routes } from 'solid-app-router';
import type { Component } from 'solid-js';
import { NewTaskModal } from '../taskNew/NewTaskModal';
import { CtaButton } from './CtaButton';
import { Todos } from './Todos';

const Tasks: Component = () => {
  return (
    <>
      <Routes>
        <Route
          path=""
          element={
            <>
              <Todos />
              {/* TODO: FAB accessibility and/or keyboard hotkey */}
              <CtaButton class="fixed bottom-24 right-6 z-10 md:bottom-8" />
            </>
          }
        />
        {/* TODO: implement contextual modal navigation, 
        see https://github.com/solidjs/solid-app-router/issues/129 */}
        <Route path="new" element={<NewTaskModal />} />
      </Routes>
    </>
  );
};

export { Tasks };
