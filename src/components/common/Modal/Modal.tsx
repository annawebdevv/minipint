import { observer } from "mobx-react-lite";
import { FC, MouseEventHandler, ReactNode, useRef } from "react";
import { createPortal } from "react-dom";
import store from "../../../store/store";
import { ModalContainer, ModalWrapper } from "./styles";

interface ModalProps {
  children: ReactNode;
}

export const Modal: FC<ModalProps> = observer(({ children }) => {
  const overLayRef = useRef<HTMLDivElement>(null);
  const isModal = store.isModal;

  const handleOverlayClick: MouseEventHandler<HTMLDivElement> = ({
    target,
  }) => {
    if (target === overLayRef.current) store.setIsModal(false);
  };

  return createPortal(
    <ModalWrapper
      visible={isModal}
      ref={overLayRef}
      onClick={handleOverlayClick}>
      <ModalContainer>{children}</ModalContainer>
    </ModalWrapper>,
    document.body
  );
});
