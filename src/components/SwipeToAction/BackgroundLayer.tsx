import type { ParentComponent } from 'solid-js';
import type { ClassProps } from '../../types';
import type { SwipeDirection } from './SwipeDirection';
import { LEFT } from './SwipeDirection';

export interface BackgroundLayerProps extends ClassProps {
  ref: HTMLDivElement;
  swipeDirection: SwipeDirection;
}

const BackgroundLayer: ParentComponent<BackgroundLayerProps> = (props) => {
  return (
    <div
      ref={props.ref}
      class={`absolute flex h-full w-full items-center px-6 ${
        props.swipeDirection === LEFT ? 'justify-end' : 'justify-start'
      } ${props.class ?? ''}`}
    >
      {props.children}
    </div>
  );
};

export { BackgroundLayer };
