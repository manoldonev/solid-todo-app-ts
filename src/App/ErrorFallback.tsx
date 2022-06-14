import type { Component } from 'solid-js';

const ErrorFallback: Component<{ error: string; resetErrorBoundary: VoidFunction }> = (props) => {
  return (
    <main class="mx-auto flex min-h-screen max-w-2xl items-center justify-center p-3">
      <div role="alert">
        <div class="rounded-t bg-error px-4 py-2 font-bold text-on-error">Oops!</div>
        <div class="flex flex-col rounded-b border border-t-0 border-error bg-error-container px-4 py-3 text-on-error-container">
          <h2>Something went wrong:</h2>
          <pre class="whitespace-pre-wrap break-all">{props.error}</pre>
          <button
            type="button"
            onClick={() => props.resetErrorBoundary()}
            class="mx-auto mt-5 h-12 w-24 whitespace-nowrap rounded-lg border border-error bg-on-error px-5 py-2.5 text-center text-sm font-medium text-error hover:bg-error hover:text-on-error focus:ring-4 focus:ring-error/25"
          >
            Try again
          </button>
        </div>
      </div>
    </main>
  );
};

export { ErrorFallback };
