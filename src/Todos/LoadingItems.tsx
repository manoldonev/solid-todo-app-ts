import type { Component } from 'solid-js';
import { AiOutlineLoading } from 'solid-icons/ai';

const LoadingItems: Component = () => {
  return (
    <div class="flex min-h-screen items-center justify-center pb-40 text-on-background">
      <AiOutlineLoading class="h-40 w-40 animate-spin" />
    </div>
  );
};

export { LoadingItems };
