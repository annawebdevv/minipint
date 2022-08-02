import styled from "styled-components";


export const SideBarContainer = styled.div`
  width: 300px;
  background-color: ${(props) => props.theme.main.color};
  position: absolute;
  top: 0;
  right: 0;
  z-index: 100;
  height: 100vh;
  transition: all 0.5s ease;
  padding: 20px 25px;
  cursor: default;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const Wrapper = styled.div<{ visible: boolean }>`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  transition: all 0.5s ease;
  transform: ${(props) => (props.visible ? "none" : "translateX(100%)")};

  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  z-index: 100;
  cursor: pointer;
`;
export const LogOut = styled.div`
  background-color: transparent;
  color: white;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 18px;
  cursor: pointer;
  width: fit-content;
  border-radius: ${(props) => props.theme.main.br};
  padding: 7px;
  box-shadow: 0px 0px 7px white;
  transition: all 0.3s ease;
  :hover {
    outline: 0.5px solid white;
  }
`;
export const ExitImage = styled.img`
  width: 30px;
  height: 30px;
  object-fit: cover;
`;
