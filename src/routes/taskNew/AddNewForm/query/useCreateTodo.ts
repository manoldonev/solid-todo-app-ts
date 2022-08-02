import type { UseMutationResult } from '../../../../solid-query';
import type { CreateTodoMutation, CreateTodoMutationVariables } from '../../../../generated';
import { useCreateTodoMutation } from '../../../../generated';
import { todoKeys } from '../../../../queryKeyFactory';
import { useQueryClient } from '../../../../solid-query';

const useCreateTodo = (): UseMutationResult<CreateTodoMutation, Error, CreateTodoMutationVariables> => {
  const queryClient = useQueryClient();

  return useCreateTodoMutation({
    onSuccess: async () => queryClient.invalidateQueries(todoKeys.all),
  });
};

export { useCreateTodo };
