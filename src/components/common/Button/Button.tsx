import { FC, ReactNode } from "react";

import { ButtonDefault } from "./styles";

interface ButtonProps {
  children: string | ReactNode;
  onClick?: (e: any) => void;
}

export const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return <ButtonDefault {...props}> {children} </ButtonDefault>;
};
