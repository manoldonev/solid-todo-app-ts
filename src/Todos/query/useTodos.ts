import type { UseInfiniteQueryResult } from 'react-query';
import type { TodosQuery } from '../../generated';
import { useInfiniteTodosQuery } from '../../generated';

const enum SortDirection {
  Ascending = 'asc',
  Descending = 'desc',
}

const pageIndex = 1;
const pageSize = 10;
const sortField = 'id';
const sortDirection = SortDirection.Descending;

const useTodos = (): Readonly<UseInfiniteQueryResult<TodosQuery>> => {
  const queryVariables = {
    page: pageIndex,
    limit: pageSize,
    sort: sortField,
    direction: sortDirection,
  };

  const query = useInfiniteTodosQuery('page', queryVariables, {
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.todos == null || lastPage.todos.length < pageSize) {
        return null;
      }

      return { page: allPages.length + 1 };
    },
    keepPreviousData: true,
  });

  return query;
};

export { useTodos };
