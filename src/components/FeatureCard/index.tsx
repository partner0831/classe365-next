import React from "react";
import { STRAPI_API } from "@/config";
import type { IFeatureCard } from "@/types";
import * as Styled from "./featureCard.styles";

export const FeatureCard: React.FC<IFeatureCard> = (props) => {
  return (
    <Styled.FeatureCardWrapper>
      <img
        src={props.image?.url ? STRAPI_API + props.image?.url : props.image}
        alt="Feature"
      />
      <div>
        <h5>{props.title}</h5>
        <p>{props.subtitle}</p>
      </div>
    </Styled.FeatureCardWrapper>
  );
};
