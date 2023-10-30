import React from "react";
import { STRAPI_API } from "@/config";
import * as Styled from "./decrease.styles";

type Props = {
  title: string;
  description: string;
  image: any;
};

export const Decrease: React.FC<Props> = ({ description, image, title }) => {
  return (
    <Styled.DecreaseWrapper>
      <Styled.DecreaseContainer>
        <Styled.DecreaseInfoWrapper>
          <h3>{title}</h3>
          <p>{description}</p>
        </Styled.DecreaseInfoWrapper>
        <Styled.DecreaseImageWrapper>
          <img src={STRAPI_API + image?.url} alt="" />
        </Styled.DecreaseImageWrapper>
      </Styled.DecreaseContainer>
    </Styled.DecreaseWrapper>
  );
};
