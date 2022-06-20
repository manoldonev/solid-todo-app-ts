import type { Component } from 'solid-js';
import { Show } from 'solid-js';
import { HiOutlineEmojiSad as EmojiSadIcon } from 'solid-icons/hi';
import { useQuerySignal } from '../../../signals';

const NoItems: Component = () => {
  const [query, setQuery] = useQuerySignal();

  return (
    <div class="flex min-h-screen items-center justify-center pb-40 text-on-background">
      <div class="flex flex-col items-center">
        <EmojiSadIcon class="h-40 w-40" />
        <span>No items available</span>
        <Show when={query() !== ''}>
          <button
            type="button"
            onClick={() => setQuery('')}
            class="mt-2 rounded-lg border border-secondary bg-background px-5 py-2.5 text-center text-sm font-medium text-secondary outline-none hover:bg-secondary-variant hover:text-on-secondary focus:ring-4 focus:ring-secondary/50"
          >
            Reset Search
          </button>
        </Show>
      </div>
    </div>
  );
};

export { NoItems };
