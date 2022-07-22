import styled from "styled-components";

export const ButtonDefault = styled.button`
  color: white;
  padding: 10px 15px;
  background-color: ${(props) => props.theme.main.color};
  border-radius: ${(props) => props.theme.main.br};
  border: none;
  font-size: 18px;
  width: fit-content;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
  :hover {
    background-color: ${(props) => props.theme.main.colorHover};
  }
  :active {
    background-color: ${(props) => props.theme.main.colorActive};
  }
`;
