import React from "react";
import { AiOutlineCaretDown } from "react-icons/ai";
import type { ISelectProps } from "@/types";
import * as Styled from "./select.styles";

export const Select: React.FC<ISelectProps> = ({
  onChange,
  options,
  label,
  placeholder,
  value,
}) => {
  console.log(options);
  return (
    <Styled.SelectWrapper>
      <span>{label}</span>
      <div>
        <select
          name=""
          onChange={onChange}
          placeholder={placeholder}
          value={value}
        >
          {options.map((row, index) => (
            <option key={index} value={row.value}>
              {row.label}
            </option>
          ))}
        </select>
        <AiOutlineCaretDown size={18} color="#DBDBDB" />
      </div>
    </Styled.SelectWrapper>
  );
};
