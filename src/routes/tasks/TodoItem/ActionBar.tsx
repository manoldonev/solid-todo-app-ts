import {
  HiOutlineBell as BellIcon,
  HiOutlineColorSwatch as ColorSwatchIcon,
  HiOutlinePencilAlt as PencilAltIcon,
  HiOutlineTrash as TrashIcon,
} from 'solid-icons/hi';
import type { Component } from 'solid-js';
import type { ClassProps } from '../../../types';

export interface ActionBarProps extends ClassProps {
  onDelete: VoidFunction;
}

const ActionBar: Component<ActionBarProps> = (props) => {
  return (
    <div class={`flex justify-end gap-1 text-on-primary-container ${props.class ?? ''}`}>
      <button type="button" class="group" disabled aria-label="Set Reminder">
        <BellIcon class="h-6 w-6 p-1 group-disabled:text-on-primary-container/25" />
      </button>
      <button type="button" class="group" disabled aria-label="Background Options">
        <ColorSwatchIcon class="h-6 w-6 p-1 group-disabled:text-on-primary-container/25" />
      </button>
      <button type="button" class="group" disabled aria-label="Edit Item">
        <PencilAltIcon class="h-6 w-6 p-1 group-disabled:text-on-primary-container/25" />
      </button>
      <button type="button" onClick={() => props.onDelete()} aria-label="Delete Item">
        <TrashIcon class="h-6 w-6 rounded-xl p-1 hover:border hover:border-secondary hover:bg-secondary-container hover:text-on-secondary-container" />
      </button>
    </div>
  );
};

export { ActionBar };
