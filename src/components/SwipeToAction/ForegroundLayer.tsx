import type { ParentComponent } from 'solid-js';
import type { ClassProps } from '../../types';

export interface ForegroundLayerProps extends ClassProps {
  ref: HTMLDivElement;
}

const ForegroundLayer: ParentComponent<ForegroundLayerProps> = (props) => {
  return (
    <div ref={props.ref} role="none" class={`relative h-full w-full touch-pan-y ${props.class ?? ''}`}>
      {props.children}
    </div>
  );
};

export { ForegroundLayer };
