import { observer } from "mobx-react-lite";
import { FC, MouseEventHandler, ReactNode, useRef } from "react";
import { createPortal } from "react-dom";

import { ModalContainer, ModalWrapper } from "./styles";

interface ModalProps {
  children: ReactNode;
  isModal: boolean;
  setModal: (el: boolean) => void;
}

export const Modal: FC<ModalProps> = observer(
  ({ children, isModal, setModal }) => {
    const overLayRef = useRef<HTMLDivElement>(null);

    const handleOverlayClick: MouseEventHandler<HTMLDivElement> = ({
      target,
    }) => {
      if (target === overLayRef.current) setModal(false);
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
  }
);
