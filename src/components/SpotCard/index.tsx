import React from "react";
import type { ISpotCardProps } from "@/types";
import * as Styled from "./spotcard.styles";

export const SportCard: React.FC<ISpotCardProps> = ({
  logo,

  content,
  color,
}) => {
  return (
    <Styled.SpotCardWrapper color={color}>
      <img src={logo} alt="logo" />
      <h2>{content}</h2>
      <h3>Read More</h3>
    </Styled.SpotCardWrapper>
  );
};
