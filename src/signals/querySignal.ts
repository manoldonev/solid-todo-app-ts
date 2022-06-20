import type { Signal } from 'solid-js';
import { createSignal } from 'solid-js';

const [query, setQuery] = createSignal('');

const useQuerySignal = (): Signal<string> => {
  return [query, setQuery];
};

export { useQuerySignal };
