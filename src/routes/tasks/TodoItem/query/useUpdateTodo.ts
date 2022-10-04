import type { CreateMutationResult } from '@tanstack/solid-query';
import { useQueryClient } from '@tanstack/solid-query';
import type { UpdateTodoMutation, UpdateTodoMutationVariables } from '../../../../generated';
import { useUpdateTodoMutation } from '../../../../generated';
import { todoKeys } from '../../../../queryKeyFactory';

const useUpdateTodo = (): CreateMutationResult<UpdateTodoMutation, Error, UpdateTodoMutationVariables> => {
  const queryClient = useQueryClient();

  return useUpdateTodoMutation({
    onSuccess: async () => queryClient.invalidateQueries(todoKeys.all),
  });
};

export { useUpdateTodo };
