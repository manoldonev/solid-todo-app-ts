import type { Component } from 'solid-js';

const NotFound: Component = () => {
  return (
    <div class="min-h-screen bg-error-container p-4 text-on-error-container">
      <p>There&apos;s nothing here!</p>
    </div>
  );
};

export { NotFound };
