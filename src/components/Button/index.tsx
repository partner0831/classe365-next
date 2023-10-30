import React from "react";
import type { IButtonProps } from "@/types";
import * as Styled from "./button.styles";

export const Button: React.FC<IButtonProps> = ({
  onClick,
  bg = "#6772E5",
  border = "#6772E5",
  font = "#ffffff",
  className,
  size = "md",
  children,
}) => {
  return (
    <Styled.ButtonWrapper
      className={className}
      size={size}
      onClick={onClick}
      bg={bg}
      border={border}
      font={font}
    >
      {children}
    </Styled.ButtonWrapper>
  );
};
