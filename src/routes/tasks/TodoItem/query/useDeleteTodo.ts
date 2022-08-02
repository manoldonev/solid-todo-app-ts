import type { UseMutationResult } from '../../../../solid-query';
import type { DeleteTodoMutation, DeleteTodoMutationVariables } from '../../../../generated';
import { useDeleteTodoMutation } from '../../../../generated';
import { todoKeys } from '../../../../queryKeyFactory';
import { useQueryClient } from '../../../../solid-query';

const useDeleteTodo = (): UseMutationResult<DeleteTodoMutation, Error, DeleteTodoMutationVariables> => {
  const queryClient = useQueryClient();

  return useDeleteTodoMutation({
    onSuccess: async () => queryClient.invalidateQueries(todoKeys.all),
  });
};
export { useDeleteTodo };
