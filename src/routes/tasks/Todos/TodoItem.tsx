import type { Component } from 'solid-js';
import { ActionBar } from './ActionBar';
import { useUpdateTodo, useDeleteTodo } from './query';

const TodoItem: Component<{
  data: { id: string; task: string; done: boolean };
}> = (props) => {
  const { mutate: updateTodo } = useUpdateTodo();
  const { mutate: deleteTodo } = useDeleteTodo();

  const toggleItem: VoidFunction = () => {
    updateTodo({ id: props.data.id, input: { done: !props.data.done } });
  };

  const deleteItem: VoidFunction = () => {
    deleteTodo({ id: props.data.id });
  };

  return (
    <li class="group mb-3 w-full last:mb-20 xs:w-56 md:w-60">
      <div class="rounded-lg border border-outline bg-primary-container px-3 text-on-primary-container transition-colors">
        <h2
          class={`${props.data.done ? 'text-on-primary-container/75 line-through' : ''}`}
        >{`Lorem Ipsum #${props.data.id}`}</h2>
        <label
          for={props.data.id}
          class={`flex line-clamp-3 ${props.data.done ? 'text-on-primary-container/75 line-through' : ''}`}
        >
          <input
            type="checkbox"
            class="mx-2 flex-initial accent-secondary"
            id={props.data.id}
            checked={props.data.done}
            onChange={toggleItem}
          />
          {props.data.task}
        </label>
        <ActionBar
          class="my-1 opacity-0 transition-opacity duration-500 group-focus-within:opacity-100 group-hover:opacity-100"
          onDelete={deleteItem}
        />
      </div>
    </li>
  );
};

export { TodoItem };
