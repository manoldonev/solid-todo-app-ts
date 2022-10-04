// @ts-nocheck
import {createQuery, createInfiniteQuery, createMutation, CreateQueryOptions, CreateInfiniteQueryOptions, CreateMutationOptions } from '@tanstack/solid-query'
import { graphql, ResponseResolver, GraphQLRequest, GraphQLContext } from 'msw'
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(query: string, variables?: TVariables) {
  return async (): Promise<TData> => {
    const res = await fetch("https://fakeql.com/graphql/a84889379bf38e69400ee9ba6ad07c58", {
    method: "POST",
    ...({"headers":{"Content-Type":"application/json"}}),
      body: JSON.stringify({ query, variables }),
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    // HACK: 424 fakeQL response threw a raw error not following the JSON API spec
    if (json.error) {
      throw new Error(json.error);
    }

    return json.data;
  }
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `DateTime` scalar represents a date and time following the ISO 8601 standard */
  DateTime: any;
  _Any: any;
  _FieldSet: any;
};

export type CreateTodoInput = {
  done: Scalars['Boolean'];
  task: Scalars['String'];
  user_id: Scalars['ID'];
};

export type CreateUserInput = {
  firstname: Scalars['String'];
};

export enum MathOptions {
  Ceil = 'CEIL',
  Floor = 'FLOOR',
  Round = 'ROUND'
}

export type Mutation = {
  __typename?: 'Mutation';
  _createSnapshot: Scalars['Boolean'];
  createTodo: Todo;
  createUser: User;
  deleteTodo: Scalars['ID'];
  deleteUser: Scalars['ID'];
  updateTodo: Todo;
  updateUser: User;
};


export type Mutation_CreateSnapshotArgs = {
  key: Scalars['String'];
};


export type MutationCreateTodoArgs = {
  input: CreateTodoInput;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationDeleteTodoArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateTodoArgs = {
  id: Scalars['ID'];
  input: UpdateTodoInput;
};


export type MutationUpdateUserArgs = {
  id: Scalars['ID'];
  input: UpdateUserInput;
};

export type Query = {
  __typename?: 'Query';
  _aggregation: Scalars['Float'];
  _entities: Array<Maybe<_Entity>>;
  _service: _Service;
  _typeDefs: Scalars['String'];
  todo?: Maybe<Todo>;
  todos?: Maybe<Array<Maybe<Todo>>>;
  user?: Maybe<User>;
  users?: Maybe<Array<Maybe<User>>>;
};


export type Query_AggregationArgs = {
  field?: InputMaybe<Scalars['String']>;
  ref?: InputMaybe<Scalars['String']>;
  stat: Scalars['String'];
  type?: InputMaybe<Scalars['String']>;
};


export type Query_EntitiesArgs = {
  representations: Array<Scalars['_Any']>;
};


export type QueryTodoArgs = {
  id: Scalars['ID'];
};


export type QueryTodosArgs = {
  dir?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  ref?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<TodosWhere>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type QueryUsersArgs = {
  dir?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  ref?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<UsersWhere>;
};

export type Todo = {
  __typename?: 'Todo';
  _boolean: Scalars['Boolean'];
  _float: Scalars['Float'];
  _int: Scalars['Int'];
  _nest: Todo;
  _string: Scalars['String'];
  done: Scalars['Boolean'];
  id: Scalars['ID'];
  task: Scalars['String'];
  user: User;
};


export type Todo_FloatArgs = {
  fixed?: InputMaybe<Scalars['Int']>;
  max?: InputMaybe<Scalars['Float']>;
  min?: InputMaybe<Scalars['Float']>;
};


export type Todo_IntArgs = {
  max?: InputMaybe<Scalars['Int']>;
  min?: InputMaybe<Scalars['Int']>;
};


export type Todo_StringArgs = {
  casing?: InputMaybe<Scalars['String']>;
  full?: InputMaybe<Scalars['Boolean']>;
  length?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  max?: InputMaybe<Scalars['Int']>;
  min?: InputMaybe<Scalars['Int']>;
  nationality?: InputMaybe<Scalars['String']>;
  pool?: InputMaybe<Scalars['String']>;
  sentences?: InputMaybe<Scalars['Int']>;
  syllables?: InputMaybe<Scalars['Int']>;
  template?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  words?: InputMaybe<Scalars['Int']>;
};


export type TodoTaskArgs = {
  length?: InputMaybe<Scalars['Int']>;
};

export type TodosWhere = {
  and?: InputMaybe<Array<TodosWhere>>;
  done_eq?: InputMaybe<Scalars['Boolean']>;
  done_exists?: InputMaybe<Scalars['Boolean']>;
  id_eq?: InputMaybe<Scalars['Float']>;
  id_ge?: InputMaybe<Scalars['Float']>;
  id_gt?: InputMaybe<Scalars['Float']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_le?: InputMaybe<Scalars['Float']>;
  id_lt?: InputMaybe<Scalars['Float']>;
  id_neq?: InputMaybe<Scalars['Float']>;
  id_nin?: InputMaybe<Array<Scalars['ID']>>;
  like?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<Array<TodosWhere>>;
  or?: InputMaybe<Array<TodosWhere>>;
  search?: InputMaybe<Scalars['String']>;
  task_contains?: InputMaybe<Scalars['String']>;
  task_endswith?: InputMaybe<Scalars['String']>;
  task_eq?: InputMaybe<Scalars['String']>;
  task_exists?: InputMaybe<Scalars['Boolean']>;
  task_in?: InputMaybe<Array<Scalars['String']>>;
  task_neq?: InputMaybe<Scalars['String']>;
  task_nin?: InputMaybe<Array<Scalars['String']>>;
  task_startswith?: InputMaybe<Scalars['String']>;
  user_and?: InputMaybe<Array<UsersWhere>>;
  user_firstname_contains?: InputMaybe<Scalars['String']>;
  user_firstname_endswith?: InputMaybe<Scalars['String']>;
  user_firstname_eq?: InputMaybe<Scalars['String']>;
  user_firstname_exists?: InputMaybe<Scalars['Boolean']>;
  user_firstname_in?: InputMaybe<Array<Scalars['String']>>;
  user_firstname_neq?: InputMaybe<Scalars['String']>;
  user_firstname_nin?: InputMaybe<Array<Scalars['String']>>;
  user_firstname_startswith?: InputMaybe<Scalars['String']>;
  user_id_eq?: InputMaybe<Scalars['Float']>;
  user_id_exists?: InputMaybe<Scalars['Boolean']>;
  user_id_ge?: InputMaybe<Scalars['Float']>;
  user_id_gt?: InputMaybe<Scalars['Float']>;
  user_id_in?: InputMaybe<Array<Scalars['ID']>>;
  user_id_le?: InputMaybe<Scalars['Float']>;
  user_id_lt?: InputMaybe<Scalars['Float']>;
  user_id_neq?: InputMaybe<Scalars['Float']>;
  user_id_nin?: InputMaybe<Array<Scalars['ID']>>;
  user_like?: InputMaybe<Scalars['String']>;
  user_not?: InputMaybe<Array<UsersWhere>>;
  user_or?: InputMaybe<Array<UsersWhere>>;
  user_search?: InputMaybe<Scalars['String']>;
};

export type UpdateTodoInput = {
  done?: InputMaybe<Scalars['Boolean']>;
  task?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['ID']>;
};

export type UpdateUserInput = {
  firstname?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  _boolean: Scalars['Boolean'];
  _float: Scalars['Float'];
  _int: Scalars['Int'];
  _nest: User;
  _string: Scalars['String'];
  firstname: Scalars['String'];
  id: Scalars['ID'];
  todos?: Maybe<Array<Maybe<Todo>>>;
};


export type User_FloatArgs = {
  fixed?: InputMaybe<Scalars['Int']>;
  max?: InputMaybe<Scalars['Float']>;
  min?: InputMaybe<Scalars['Float']>;
};


export type User_IntArgs = {
  max?: InputMaybe<Scalars['Int']>;
  min?: InputMaybe<Scalars['Int']>;
};


export type User_StringArgs = {
  casing?: InputMaybe<Scalars['String']>;
  full?: InputMaybe<Scalars['Boolean']>;
  length?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  max?: InputMaybe<Scalars['Int']>;
  min?: InputMaybe<Scalars['Int']>;
  nationality?: InputMaybe<Scalars['String']>;
  pool?: InputMaybe<Scalars['String']>;
  sentences?: InputMaybe<Scalars['Int']>;
  syllables?: InputMaybe<Scalars['Int']>;
  template?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  words?: InputMaybe<Scalars['Int']>;
};


export type UserFirstnameArgs = {
  length?: InputMaybe<Scalars['Int']>;
};


export type UserTodosArgs = {
  dir?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  ref?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<TodosWhere>;
};

export type UsersWhere = {
  and?: InputMaybe<Array<UsersWhere>>;
  firstname_contains?: InputMaybe<Scalars['String']>;
  firstname_endswith?: InputMaybe<Scalars['String']>;
  firstname_eq?: InputMaybe<Scalars['String']>;
  firstname_exists?: InputMaybe<Scalars['Boolean']>;
  firstname_in?: InputMaybe<Array<Scalars['String']>>;
  firstname_neq?: InputMaybe<Scalars['String']>;
  firstname_nin?: InputMaybe<Array<Scalars['String']>>;
  firstname_startswith?: InputMaybe<Scalars['String']>;
  id_eq?: InputMaybe<Scalars['Float']>;
  id_ge?: InputMaybe<Scalars['Float']>;
  id_gt?: InputMaybe<Scalars['Float']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_le?: InputMaybe<Scalars['Float']>;
  id_lt?: InputMaybe<Scalars['Float']>;
  id_neq?: InputMaybe<Scalars['Float']>;
  id_nin?: InputMaybe<Array<Scalars['ID']>>;
  like?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<Array<UsersWhere>>;
  or?: InputMaybe<Array<UsersWhere>>;
  search?: InputMaybe<Scalars['String']>;
};

export type _Entity = Todo | User;

export type _Service = {
  __typename?: '_Service';
  sdl?: Maybe<Scalars['String']>;
};

export type CreateTodoMutationVariables = Exact<{
  input: CreateTodoInput;
}>;


export type CreateTodoMutation = { __typename?: 'Mutation', createTodo: { __typename?: 'Todo', id: string, task: string, done: boolean } };

export type DeleteTodoMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteTodoMutation = { __typename?: 'Mutation', deleteTodo: string };

export type UpdateTodoMutationVariables = Exact<{
  id: Scalars['ID'];
  input: UpdateTodoInput;
}>;


export type UpdateTodoMutation = { __typename?: 'Mutation', updateTodo: { __typename?: 'Todo', id: string, task: string, done: boolean } };

export type TodosQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  input?: InputMaybe<TodosWhere>;
  sort?: InputMaybe<Scalars['String']>;
  direction?: InputMaybe<Scalars['String']>;
}>;


export type TodosQuery = { __typename?: 'Query', todos?: Array<{ __typename?: 'Todo', id: string, task: string, done: boolean } | null> | null };


export const CreateTodoDocument = `
    mutation createTodo($input: CreateTodoInput!) {
  createTodo(input: $input) {
    id
    task
    done
  }
}
    `;
export const useCreateTodoMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: CreateMutationOptions<CreateTodoMutation, TError, CreateTodoMutationVariables, TContext>) =>
    createMutation<CreateTodoMutation, TError, CreateTodoMutationVariables, TContext>(
      ['createTodo'],
      (variables?: CreateTodoMutationVariables) => fetcher<CreateTodoMutation, CreateTodoMutationVariables>(CreateTodoDocument, variables)(),
      options
    );
export const DeleteTodoDocument = `
    mutation deleteTodo($id: ID!) {
  deleteTodo(id: $id)
}
    `;
export const useDeleteTodoMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: CreateMutationOptions<DeleteTodoMutation, TError, DeleteTodoMutationVariables, TContext>) =>
    createMutation<DeleteTodoMutation, TError, DeleteTodoMutationVariables, TContext>(
      ['deleteTodo'],
      (variables?: DeleteTodoMutationVariables) => fetcher<DeleteTodoMutation, DeleteTodoMutationVariables>(DeleteTodoDocument, variables)(),
      options
    );
export const UpdateTodoDocument = `
    mutation updateTodo($id: ID!, $input: UpdateTodoInput!) {
  updateTodo(id: $id, input: $input) {
    id
    task
    done
  }
}
    `;
export const useUpdateTodoMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: CreateMutationOptions<UpdateTodoMutation, TError, UpdateTodoMutationVariables, TContext>) =>
    createMutation<UpdateTodoMutation, TError, UpdateTodoMutationVariables, TContext>(
      ['updateTodo'],
      (variables?: UpdateTodoMutationVariables) => fetcher<UpdateTodoMutation, UpdateTodoMutationVariables>(UpdateTodoDocument, variables)(),
      options
    );
export const TodosDocument = `
    query Todos($page: Int, $limit: Int, $input: TodosWhere, $sort: String, $direction: String) {
  todos(page: $page, limit: $limit, where: $input, sort: $sort, dir: $direction) {
    id
    task
    done
  }
}
    `;
export const useTodosQuery = <
      TData = TodosQuery,
      TError = unknown
    >(
      variables?: TodosQueryVariables,
      options?: CreateQueryOptions<TodosQuery, TError, TData>
    ) =>
    createQuery<TodosQuery, TError, TData>(()=>
      variables === undefined ? ['Todos'] : ['Todos', variables],
      fetcher<TodosQuery, TodosQueryVariables>(TodosDocument, variables),
      options
    );
export const useInfiniteTodosQuery = <
      TData = TodosQuery,
      TError = unknown
    >(
      pageParamKey: keyof TodosQueryVariables,
      variables?: TodosQueryVariables,
      options?: CreateInfiniteQueryOptions<TodosQuery, TError, TData>
    ) =>
    createInfiniteQuery<TodosQuery, TError, TData>(()=>
      variables === undefined ? ['Todos.infinite'] : ['Todos.infinite', variables],
      (metaData) => fetcher<TodosQuery, TodosQueryVariables>(TodosDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    );


/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockCreateTodoMutation((req, res, ctx) => {
 *   const { input } = req.variables;
 *   return res(
 *     ctx.data({ createTodo })
 *   )
 * })
 */
export const mockCreateTodoMutation = (resolver: ResponseResolver<GraphQLRequest<CreateTodoMutationVariables>, GraphQLContext<CreateTodoMutation>, any>) =>
  graphql.mutation<CreateTodoMutation, CreateTodoMutationVariables>(
    'createTodo',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockDeleteTodoMutation((req, res, ctx) => {
 *   const { id } = req.variables;
 *   return res(
 *     ctx.data({ deleteTodo })
 *   )
 * })
 */
export const mockDeleteTodoMutation = (resolver: ResponseResolver<GraphQLRequest<DeleteTodoMutationVariables>, GraphQLContext<DeleteTodoMutation>, any>) =>
  graphql.mutation<DeleteTodoMutation, DeleteTodoMutationVariables>(
    'deleteTodo',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockUpdateTodoMutation((req, res, ctx) => {
 *   const { id, input } = req.variables;
 *   return res(
 *     ctx.data({ updateTodo })
 *   )
 * })
 */
export const mockUpdateTodoMutation = (resolver: ResponseResolver<GraphQLRequest<UpdateTodoMutationVariables>, GraphQLContext<UpdateTodoMutation>, any>) =>
  graphql.mutation<UpdateTodoMutation, UpdateTodoMutationVariables>(
    'updateTodo',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockTodosQuery((req, res, ctx) => {
 *   const { page, limit, input, sort, direction } = req.variables;
 *   return res(
 *     ctx.data({ todos })
 *   )
 * })
 */
export const mockTodosQuery = (resolver: ResponseResolver<GraphQLRequest<TodosQueryVariables>, GraphQLContext<TodosQuery>, any>) =>
  graphql.query<TodosQuery, TodosQueryVariables>(
    'Todos',
    resolver
  )
