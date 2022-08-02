import type { UseMutationResult } from '../../../../solid-query';
import { useQueryClient } from '../../../../solid-query';
import type { UpdateTodoMutation, UpdateTodoMutationVariables } from '../../../../generated';
import { useUpdateTodoMutation } from '../../../../generated';
import { todoKeys } from '../../../../queryKeyFactory';

const useUpdateTodo = (): UseMutationResult<UpdateTodoMutation, Error, UpdateTodoMutationVariables> => {
  const queryClient = useQueryClient();

  return useUpdateTodoMutation({
    onSuccess: async () => queryClient.invalidateQueries(todoKeys.all),
  });
};

export { useUpdateTodo };
