import React from "react";
import { STRAPI_API } from "@/config";
import * as Styled from "./enjoy.styles";

type Props = {
  title: string;
  description: string;
  grid: {
    image: any;
    title: string;
    description: string;
  }[];
};

export const Enjoy: React.FC<Props> = ({ description, grid, title }) => {
  return (
    <Styled.EnjoySectionWrapper>
      <h1>{title}</h1>
      <p>{description}</p>
      <Styled.EnjoyGridWrapper>
        {grid?.map((item, index) => (
          <Styled.GridItemWrapper key={index}>
            <img src={STRAPI_API + item.image?.url} alt="" />
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </Styled.GridItemWrapper>
        ))}
      </Styled.EnjoyGridWrapper>
    </Styled.EnjoySectionWrapper>
  );
};
