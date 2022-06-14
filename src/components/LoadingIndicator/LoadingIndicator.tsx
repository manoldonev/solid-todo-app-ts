import type { Component } from 'solid-js';
import { AiOutlineLoading as LoadingIcon } from 'solid-icons/ai';

const LoadingIndicator: Component<{ class?: string }> = (props) => (
  <div class={`min-h-screen ${props.class ?? ''}`}>
    <LoadingIcon class="inline-block pt-4 pl-4 h-6 w-6 animate-spin" /> Loading...
  </div>
);

export { LoadingIndicator };
