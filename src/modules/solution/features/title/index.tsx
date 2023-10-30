import React from "react";
import * as Styled from "./title.styles";

type Props = {
  subtitle: string;
  title: string;
};

export const Title: React.FC<Props> = ({ subtitle, title }) => {
  return (
    <Styled.TitleSectionWrapper>
      <h4>{subtitle}</h4>
      <h1>{title}</h1>
    </Styled.TitleSectionWrapper>
  );
};
