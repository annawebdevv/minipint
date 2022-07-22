import styled from "styled-components";

export const Input = styled.input`
  color: rgb(120, 120, 120);
  border: none;
  outline: 1px solid rgb(120, 120, 120);
  border-radius: ${(props) => props.theme.main.br};
  padding: 10px;
  padding-right: 35px;
  font-weight: 500;
  font-size: 17px;
  :focus {
    outline: 2.5px solid ${(props) => props.theme.main.color};
    border: none;
  }
`;
