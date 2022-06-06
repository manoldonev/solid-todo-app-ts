import type { Component } from 'solid-js';
import { HiOutlineEmojiSad } from 'solid-icons/hi';

const NoItems: Component = () => {
  return (
    <div class="flex min-h-screen items-center justify-center pb-40 text-on-background">
      <div class="flex flex-col items-center">
        <HiOutlineEmojiSad class="h-40 w-40" />
        <span>No items available</span>
      </div>
    </div>
  );
};

export { NoItems };