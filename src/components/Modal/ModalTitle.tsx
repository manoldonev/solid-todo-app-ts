import type { ParentComponent } from 'solid-js';
import type { ClassProps } from '../../types';
import { useModalContext } from './ModalProvider';

const ModalTitle: ParentComponent<ClassProps> = (props) => {
  const modalContext = useModalContext();

  return (
    <p id={modalContext.state.titleId} role="heading" aria-level={1} class={props.class}>
      {props.children}
    </p>
  );
};

export { ModalTitle };
