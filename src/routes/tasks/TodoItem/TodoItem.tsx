import { createMediaQuery } from '@solid-primitives/media';
import type { Component } from 'solid-js';
import { Match, Switch } from 'solid-js';
import { HiOutlineTrash as TrashIcon } from 'solid-icons/hi';
import { SwipeToAction } from '../../../components/SwipeToAction';
import { ActionBar } from './ActionBar';
import { useUpdateTodo, useDeleteTodo } from './query';

const TodoItem: Component<{
  data: { id: string; task: string; done: boolean };
}> = (props) => {
  const isTouchEnabled = createMediaQuery('(pointer: coarse)');
  const { mutate: updateTodo } = useUpdateTodo();
  const { mutate: deleteTodo } = useDeleteTodo();

  const toggleItem: VoidFunction = () => {
    updateTodo({ id: props.data.id, input: { done: !props.data.done } });
  };

  const deleteItem: VoidFunction = () => {
    deleteTodo({ id: props.data.id });
  };

  return (
    <Switch
      fallback={
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
      }
    >
      <Match when={isTouchEnabled()}>
        <li class="mb-3 w-full last:mb-20 xs:w-56 md:w-60">
          <SwipeToAction
            class="rounded-lg border border-outline bg-primary-container px-3 pb-3 text-on-primary-container transition-colors"
            onTap={toggleItem}
            onSwipedLeft={deleteItem}
            onSwipedRight={deleteItem}
            leftChildren={<TrashIcon class="h-6 w-6" />}
            leftChildrenClass="bg-error-container text-on-error-container border border-outline rounded-lg"
            rightChildren={<TrashIcon class="h-6 w-6" />}
            rightChildrenClass="bg-error-container text-on-error-container border border-outline rounded-lg"
          >
            <h2
              class={`${props.data.done ? 'text-on-primary-container/75 line-through' : ''}`}
            >{`Lorem Ipsum #${props.data.id}`}</h2>
            <label class={`flex line-clamp-3 ${props.data.done ? 'text-on-primary-container/75 line-through' : ''}`}>
              {props.data.task}
            </label>
          </SwipeToAction>
        </li>
      </Match>
    </Switch>
  );
};

export { TodoItem };
