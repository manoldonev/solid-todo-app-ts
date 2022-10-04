import type { CreateMutationResult } from '@tanstack/solid-query';
import { useQueryClient } from '@tanstack/solid-query';
import type { CreateTodoMutation, CreateTodoMutationVariables } from '../../../../generated';
import { useCreateTodoMutation } from '../../../../generated';
import { todoKeys } from '../../../../queryKeyFactory';

const useCreateTodo = (): CreateMutationResult<CreateTodoMutation, Error, CreateTodoMutationVariables> => {
  const queryClient = useQueryClient();

  return useCreateTodoMutation({
    onSuccess: async () => queryClient.invalidateQueries(todoKeys.all),
  });
};

export { useCreateTodo };
