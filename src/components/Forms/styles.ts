import styled from "styled-components";
import { Button } from "../common/Button/Button";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: start;
  font-weight: 500;
`;

export const Cancel = styled(Button)`
  background: none;
  color: ${(props) => props.theme.outline.color};
  :hover {
    background-color: ${(props) => props.theme.outline.colorHover};
  }
  :active {
    background-color: ${(props) => props.theme.outline.colorActive};
  }
`;

export const Link = styled(Button)`
  font-size: 16px;
  background: none;
  color: ${(props) => props.theme.outline.color};
  :hover {
    background: none;
    text-decoration: underline;
  }
  :active {
    background: none;
  }
`;
