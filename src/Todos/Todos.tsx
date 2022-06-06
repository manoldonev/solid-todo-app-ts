import type { Component } from 'solid-js';
import { For, Switch, Match } from 'solid-js';
import { NoItems } from './NoItems';
import { useTodos } from './query/useTodos';

const Todos: Component = () => {
  const query = useTodos();

  return (
    <Switch fallback={<NoItems />}>
      <Match when={query.isLoading}>
        <span class="text-on-background">Loading...</span>
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
