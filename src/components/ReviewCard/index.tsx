import React from "react";
import type { IReviewCardProps } from "@/types";
import * as Styled from "./review.styles";

export const ReviewCard: React.FC<IReviewCardProps> = ({
  header,
  content1,
  content2,
  name,
  role,
  color,
  pos,
}) => {
  return (
    <Styled.ReviewCardWrapper color={color}>
      <h1>{header}</h1>
      <h2>{content1}</h2>
      <h2>{content2}</h2>
      <h3>{name}</h3>
      <h4>{role}</h4>
      <h4>{pos}</h4>
    </Styled.ReviewCardWrapper>
  );
};
