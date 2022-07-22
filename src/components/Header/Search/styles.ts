import styled from "styled-components";
import { ReactComponent as IconSearch } from "./../../../utils/search.svg";

export const SearchContainer = styled.div`
  color: rgb(120, 120, 120);
  position: relative;
`;
export const SearchIcon = styled(IconSearch)`
  fill: currentColor;
  position: absolute;
  top: 12px;
  right: 10px;
`;
export const Input = styled.input`
  color: rgb(120, 120, 120);
  border: none;
  outline: 1px solid rgb(120, 120, 120);
  border-radius: 10px;
  padding: 10px;
  padding-right: 35px;
  font-weight: 500;
  font-size: 17px;
  :focus {
    outline: 2.5px solid rgba(209, 133, 136, 1);
    border: none;
  }
`;
