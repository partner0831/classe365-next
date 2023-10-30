import React from "react";
import { STRAPI_API } from "@/config";
import * as Styled from "./simplify.styles";

type Props = {
  title: string;
  description: string;
  image: any;
};

export const Simplify: React.FC<Props> = ({ description, image, title }) => {
  return (
    <Styled.SimplifyWrapper>
      <Styled.SimplifyContainer>
        <Styled.SimplifyImageWrapper>
          <img src={STRAPI_API + image?.url} alt="" />
        </Styled.SimplifyImageWrapper>
        <Styled.SimplifyInfoWrapper>
          <h3>{title}</h3>
          <p>{description}</p>
        </Styled.SimplifyInfoWrapper>
      </Styled.SimplifyContainer>
    </Styled.SimplifyWrapper>
  );
};
