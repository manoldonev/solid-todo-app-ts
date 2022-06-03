import { splitProps } from 'solid-js';
import type { TodosQuery } from '../../generated';
import { useTodosQuery } from '../../generated';

const useTodos = (): {
  data: TodosQuery | undefined;
  isLoading: boolean;
  isError: boolean;
} => {
  const state = useTodosQuery();
  return splitProps(state, ['data', 'isLoading', 'isError'])[0];
};

export { useTodos };
