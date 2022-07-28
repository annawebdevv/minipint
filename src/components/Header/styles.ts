import styled from "styled-components";


export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;
export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: 600;
`;

export const LogoImage = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
`;
export const EnterImage = styled.img`
  width: 30px;
  height: 30px;
  object-fit: cover;
`;

export const Enter = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all .4s ease;
  padding: 5px;
  cursor: pointer;
  border-radius: ${(props) => props.theme.main.br};
  :hover {
    background-color: ${(props) => props.theme.main.color};
  }
`