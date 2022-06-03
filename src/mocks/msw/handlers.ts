import { mockTodosQuery } from '../../generated';
import { todos } from './todos';

// const pageIndex = 1;
// const pageSize = 10;

export const handlers = [
  mockTodosQuery((req, res, ctx) => {
    // const { page, limit, input } = req.variables;
    // const start = ((page ?? pageIndex) - 1) * (limit ?? pageSize);
    // const end = start + (limit ?? pageSize);

    // const items = [...todos];
    // const taskContains = input?.task_contains ?? '';
    // if (taskContains !== '') {
    //   items = items.filter((todo) => todo.task.includes(taskContains));
    // }

    // return res(
    //   ctx.data({
    //     todos: items.reverse().slice(start, end),
    //   }),
    // );

    return res(
      ctx.data({
        todos: [...todos].reverse(),
      }),
    );
  }),
];
