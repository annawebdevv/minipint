import styled from "styled-components";
import user from "./../../utils/icon0.png";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  position: sticky;
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
  transition: all 0.4s ease;
  padding: 5px;
  cursor: pointer;
  border-radius: ${(props) => props.theme.main.br};
  :hover {
    background-color: ${(props) => props.theme.main.color};
  }
`;

export const UserIcon = styled.div`
  height: 40px;
  width: 40px;
  background: url(${user});
  border-radius: 50%;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-right: 10px;
  transition: box-shadow 0.3s ease;
  cursor: pointer;
  :hover {
    box-shadow: -3px -3px 15px 3px ${(props) => props.theme.main.color};
  }
`;
