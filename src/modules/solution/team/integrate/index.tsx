import React from "react";
import * as Styled from "./integrate.styles";

type Props = {
  title: string;
  description: string;
};

export const Integrate: React.FC<Props> = ({ description, title }) => {
  return (
    <Styled.IntegrateWrapper>
      <Styled.IntegrateImageWrapper>
        <img src="/assets/images/integrate.png" alt="" />
      </Styled.IntegrateImageWrapper>
      <Styled.IntegrateInfoWrapper>
        <h1>{title}</h1>
        <p>{description}</p>
      </Styled.IntegrateInfoWrapper>
    </Styled.IntegrateWrapper>
  );
};
