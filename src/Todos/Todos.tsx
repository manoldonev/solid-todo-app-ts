import type { Component } from 'solid-js';
import { For, Switch, Match } from 'solid-js';
import { useTodos } from './query/useTodos';

const Todos: Component = () => {
  const query = useTodos();

  return (
    <Switch fallback={<div>No items found</div>}>
      <Match when={query.isLoading}>
        <span>Loading...</span>
      </Match>
      <Match when={query.isError}>
        <div>An error has occurred</div>
      </Match>
      <Match when={query.data?.todos && query.data.todos.length > 0}>
        <ul>
          <For each={query.data?.todos}>{(todo) => <li>{todo?.task}</li>}</For>
        </ul>
      </Match>
    </Switch>
  );
};

export { Todos };
