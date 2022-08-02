import styled from "styled-components";


import icon0 from "./../../../utils/icon0.png";



type Props = {icon: string}

export const UserIcon = styled.div<Props>`
  height: 40px;
  width: 40px;
  background: url(${(props) => props.icon ? props.icon : icon0});
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
