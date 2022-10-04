import type { CreateMutationResult } from '@tanstack/solid-query';
import { useQueryClient } from '@tanstack/solid-query';
import type { DeleteTodoMutation, DeleteTodoMutationVariables } from '../../../../generated';
import { useDeleteTodoMutation } from '../../../../generated';
import { todoKeys } from '../../../../queryKeyFactory';

const useDeleteTodo = (): CreateMutationResult<DeleteTodoMutation, Error, DeleteTodoMutationVariables> => {
  const queryClient = useQueryClient();

  return useDeleteTodoMutation({
    onSuccess: async () => queryClient.invalidateQueries(todoKeys.all),
  });
};
export { useDeleteTodo };
