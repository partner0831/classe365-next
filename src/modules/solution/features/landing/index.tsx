import React from "react";
import { STRAPI_API } from "@/config";
import * as Styled from "./landing.styles";

type Props = {
  subtitle: string;
  title: string;
  description: string;
  image: any;
  data: {
    title: string;
    description: string;
  }[];
};

const colors = ["#6772E5", "#A389F4", "#13B9FF", "#58BABA"];

export const Landing: React.FC<Props> = ({
  data,
  description,
  image,
  subtitle,
  title,
}) => {
  return (
    <Styled.LandingWrapper>
      <Styled.LandingInfoWrapper>
        <div>
          <h4>{subtitle}</h4>
          <h1>{title}</h1>
          <p>{description}</p>
          <img src={STRAPI_API + image?.url} alt="" />
        </div>
      </Styled.LandingInfoWrapper>
      <Styled.LandingDataWrapper>
        {data?.map((row, index) => (
          <Styled.LandingDataItem
            style={{ background: colors[index] }}
            key={index}
          >
            <h1>{row.title}</h1>
            <p>{row.description}</p>
          </Styled.LandingDataItem>
        ))}
      </Styled.LandingDataWrapper>
    </Styled.LandingWrapper>
  );
};
