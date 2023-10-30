import React, { useState } from "react";
import { HiPlus } from "react-icons/hi";
import * as Data from "./data";
import * as Styled from "./coreModule.styles";

export const CoreModules: React.FC = () => {
  const { coreModules } = Data;
  const [open, setOpen] = useState(-1);
  return (
    <Styled.CoreSectionWrapper id="core1">
      {coreModules.map((row, index) => (
        <Styled.CoreItem key={index} open={open === index}>
          <h3 onClick={() => setOpen(open === index ? -1 : index)}>
            <span>{row.title}</span>
            <HiPlus />
          </h3>
          <p>{row.text}</p>
        </Styled.CoreItem>
      ))}
      {/* <div id="add"></div> */}
    </Styled.CoreSectionWrapper>
  );
};
