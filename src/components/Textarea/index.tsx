import React from "react";
import type { IInputProps } from "@/types";
import * as Styled from "./texarea.styles";

export const TextArea: React.FC<IInputProps> = ({
  onTextAreaChange,
  value,
  label,
  name,
  placeholder,
}) => {
  return (
    <Styled.TextareaWrapper>
      <span>{label}</span>
      <textarea
        name={name}
        onChange={onTextAreaChange}
        value={value}
        placeholder={placeholder}
      ></textarea>
    </Styled.TextareaWrapper>
  );
};
