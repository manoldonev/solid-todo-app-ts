import type { ParentComponent } from 'solid-js';
import { useContext, createContext } from 'solid-js';

export interface ModalState {
  dialogId: string;
  titleId: string;
}

export interface ModalContextValue {
  state: ModalState;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextValue>();

const useModalContext = (): ModalContextValue => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModalContext must be used within a Modal component.');
  }

  return context;
};

const ModalProvider: ParentComponent<{ value: ModalContextValue }> = (props) => {
  return <ModalContext.Provider value={props.value}>{props.children}</ModalContext.Provider>;
};

export { ModalProvider, useModalContext };
