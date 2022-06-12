import type { Component } from 'solid-js';
import { For, Switch, Match } from 'solid-js';
import { Masonry } from '../components/Masonry';
import { convertRemToPixels } from '../utils';
import { TodoItem } from './TodoItem';
import { useTodos } from './query/useTodos';
import { infiniteScroll } from './directives';
import { NoItems } from './NoItems';
import { LoadingItems } from './LoadingItems';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const directiveNoTreeShake = infiniteScroll;

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
          <LoadingItems />
        </Match>
        <Match
          when={
            query.data != null &&
            query.data.pages.length > 0 &&
            query.data.pages[0].todos != null &&
            query.data.pages[0].todos.length > 0
          }
        >
          <>
            <Masonry elementType="ul" options={masonryOptions}>
              <For each={query.data!.pages}>{(page) => page.todos?.map((todo) => <TodoItem data={todo!} />)}</For>
            </Masonry>
            {query.hasNextPage === true && (
              <div
                use:infiniteScroll={{
                  isLoading: () => query.isFetchingNextPage,
                  isDisabled: () => query.isError,
                  hasNextPage: () => query.hasNextPage ?? false,
                  fetchNextPage: query.fetchNextPage,
                }}
              >
                <h2 class="text-on-background">Loading...</h2>
              </div>
            )}
          </>
        </Match>
      </Switch>
    </div>
  );
};

export { Todos };
