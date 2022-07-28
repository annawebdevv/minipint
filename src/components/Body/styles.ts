import styled from "styled-components";
import { Button } from "../common/Button/Button";

const sizes = {
    width_lg: "200px",
    width_m: "170px",
    width_sm: "150px",
}

export const Container = styled.div`
  column-width: ${sizes.width_lg};
  column-gap: 15px;
  @media (max-width: 440px) {
    column-width: ${sizes.width_m};
  }
`;
export const Image = styled.img`
  width: ${sizes.width_lg};
  border-radius: 10px;
  object-fit: cover;
  @media (max-width: 440px) {
    width: ${sizes.width_m};
  }
`;

export const Wrapper = styled.div`
  margin-bottom: 10px;
  break-inside: avoid;
  position: relative;
  &:hover div {
    opacity: 1;
  }
`;

export const Border = styled.div`
  position: absolute;
  top: 0;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  width: ${sizes.width_lg};
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  text-align: right;
  transition: opacity 0.4s ease;
`;

export const DeleteButton = styled(Button)`
  background-color: transparent;
  color: red;
  padding: 2px 5px;
  border: 1px solid red;
  margin-left: auto;
  text-align: end;
  font-size: 14px;
  :hover {
    background-color: rgba(255, 0, 0, 0.17);
  }
`;
