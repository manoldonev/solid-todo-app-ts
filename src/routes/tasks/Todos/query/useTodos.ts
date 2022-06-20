import type { UseInfiniteQueryResult } from 'react-query/types';
import type { TodosQuery } from '../../../../generated';
import { useInfiniteTodosQuery } from '../../../../generated';

const enum SortDirection {
  Ascending = 'asc',
  Descending = 'desc',
}

const pageIndex = 1;
const pageSize = 10;
const sortField = 'id';
const sortDirection = SortDirection.Descending;

const useTodos = (search?: string): Readonly<UseInfiniteQueryResult<TodosQuery>> => {
  let input = null;
  if (search != null) {
    // TODO: case-insensitive search
    input = { task_contains: search };
  }

  const queryVariables = {
    page: pageIndex,
    limit: pageSize,
    input,
    sort: sortField,
    direction: sortDirection,
  };

  return useInfiniteTodosQuery('page', queryVariables, {
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.todos == null || lastPage.todos.length < pageSize) {
        return null;
      }

      return { page: allPages.length + 1 };
    },
    keepPreviousData: true,
  });
};

export { useTodos };
