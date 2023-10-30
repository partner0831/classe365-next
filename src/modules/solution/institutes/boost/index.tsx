import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { STRAPI_API } from "@/config";
import * as Comp from "@/components";
import * as Styled from "./boost.styles";

type Props = {
  subtitle: string;
  title: string;
  description: string;
  image: any;
};

export const Boost: React.FC<Props> = ({
  description,
  image,
  subtitle,
  title,
}) => {
  return (
    <Styled.BoostSectionWrapper>
      <Styled.BoostInfoWrapper>
        <h5>{subtitle}</h5>
        <h1>{title}</h1>
        <p>{description}</p>
        <Styled.ButtonWrapper>
          <Comp.Button
            bg="#6772E5"
            border="#6772E5"
            font="#E1E1E1"
            className="shadow"
          >
            <span>Try For Free</span>
            <BsArrowRight />
          </Comp.Button>
          <Comp.Button bg="transparent" border="#6772E5" font="#6772E5">
            Book a Demo
          </Comp.Button>
        </Styled.ButtonWrapper>
      </Styled.BoostInfoWrapper>
      <Styled.BoostImageWrapper>
        <img src={STRAPI_API + image?.url} alt="" />
      </Styled.BoostImageWrapper>
    </Styled.BoostSectionWrapper>
  );
};
