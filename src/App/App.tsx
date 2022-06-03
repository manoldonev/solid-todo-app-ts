import type { Component } from 'solid-js';
import { Todos } from '../Todos';

const App: Component = () => {
  return (
    <div class="min-h-screen bg-background">
      <h1 class="text-on-background">Todo App</h1>
      <Todos />
    </div>
  );
};

export { App };
