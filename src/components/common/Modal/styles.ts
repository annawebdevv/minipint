import styled from "styled-components";

interface Modal {
  visible: boolean;
}

export const ModalWrapper = styled.div<Modal>`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: ${(props) => (props.visible ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.58);
  cursor: pointer;
`;

export const ModalContainer = styled.div`
  background-color: white;
  padding: 30px 20px;
  border-radius: ${(props) => props.theme.main.br};
  cursor: default;
  width: 70%;
`;
