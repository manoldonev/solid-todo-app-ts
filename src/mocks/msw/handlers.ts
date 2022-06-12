import {
  mockCreateTodoMutation,
  mockDeleteTodoMutation,
  mockTodosQuery,
  mockUpdateTodoMutation,
} from '../../generated';
import { todos } from './todos';

const pageIndex = 1;
const pageSize = 10;

export const handlers = [
  mockTodosQuery((req, res, ctx) => {
    const { page, limit, input } = req.variables;
    const start = ((page ?? pageIndex) - 1) * (limit ?? pageSize);
    const end = start + (limit ?? pageSize);

    let items = [...todos];
    const taskContains = input?.task_contains ?? '';
    if (taskContains !== '') {
      items = items.filter((todo) => todo.task.includes(taskContains));
    }

    return res(
      ctx.data({
        todos: items.reverse().slice(start, end),
      }),
    );
  }),

  mockCreateTodoMutation((req, res, ctx) => {
    const { task, done } = req.variables.input;
    let id = '1';
    if (todos.length > 0) {
      id = (parseInt(todos[todos.length - 1].id, 10) + 1).toString();
    }

    todos.push({ id, task, done });

    return res(ctx.data({ createTodo: todos[todos.length - 1] }));
  }),

  mockUpdateTodoMutation((req, res, ctx) => {
    const { id, input } = req.variables;
    const todoItem = todos.find((todo) => todo.id === id);
    if (todoItem == null) {
      throw new Error(`Mock update failed for item id ${id}`);
    }

    todoItem.done = input.done ?? false;
    return res(ctx.data({ updateTodo: todoItem }));
  }),

  mockDeleteTodoMutation((req, res, ctx) => {
    const { id } = req.variables;
    const itemIndex = todos.findIndex((todo) => todo.id === id);
    if (itemIndex === -1) {
      throw new Error(`Mock delete failed for item id ${id}`);
    }

    todos.splice(itemIndex, 1);

    return res(ctx.data({ deleteTodo: id }));
  }),
];
