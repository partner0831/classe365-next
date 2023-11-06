import Image from "next/image";
import React from "react";
import type { IntroCardProps } from "@/types";
import * as Styled from "./introcard.styles";
import { StarIcon } from "..";
export const IntroCard: React.FC<IntroCardProps> = ({
  header,
  name,
  role,
  company,
  feature,
  description,
  content,
  color,
  key,
}) => {
  return (
    <Styled.IntroCardWrapper color={color} key={key}>
      <h1>{header}</h1>
      <h2>{name}</h2>
      <h3>{role}</h3>
      <h3>{company}</h3>
      <StarIcon />
      <h3>{feature}</h3>
      <h3>{description}</h3>
      <h4>{content}</h4>
    </Styled.IntroCardWrapper>
  );
};
