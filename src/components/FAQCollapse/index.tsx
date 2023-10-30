import React from "react";
import { FaChevronDown } from "react-icons/fa";
import type { IFAQCollapseProps } from "@/types";
import * as Styled from "./collapse.styles";

export const FAQCollapse: React.FC<IFAQCollapseProps> = ({
  desc,
  title,
  onClick,
  open,
}) => {
  return (
    <Styled.CollapseWrapper>
      <Styled.CollapseHeader onClick={onClick}>
        <h3>{title}</h3>
        <FaChevronDown />
      </Styled.CollapseHeader>
      <Styled.CollapseContent open={open}>{desc}</Styled.CollapseContent>
    </Styled.CollapseWrapper>
  );
};
