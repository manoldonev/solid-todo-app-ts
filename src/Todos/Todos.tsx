import type { Component } from 'solid-js';
import { For, Switch, Match } from 'solid-js';
import { Masonry } from '../components/Masonry';
import { convertRemToPixels } from '../utils';
import { NoItems } from './NoItems';
import { useTodos } from './query/useTodos';
import { TodoItem } from './TodoItem';

const Todos: Component = () => {
  const query = useTodos();

  const masonryOptions = {
    gutter: convertRemToPixels(0.75),
    stagger: '0.03s',
    horizontalOrder: false,
  };

  return (
    <div class="min-h-screen bg-background p-2.5 transition-colors">
      <Switch fallback={<NoItems />}>
        <Match when={query.isLoading}>
          <span class="text-on-background">Loading...</span>
        </Match>
        <Match when={query.data?.todos && query.data.todos.length > 0}>
          <Masonry elementType="ul" options={masonryOptions}>
            <For each={query.data!.todos}>{(todo) => <TodoItem data={todo!} />}</For>
          </Masonry>
        </Match>
      </Switch>
    </div>
  );
};

export { Todos };
