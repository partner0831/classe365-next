import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { STRAPI_API } from "@/config";
import * as Styled from "./powerful.styles";

type Props = {
  title: string;
  description: string;
  link: string;
  image: any;
};

export const Powerful: React.FC<Props> = ({
  description,
  image,
  link,
  title,
}) => {
  return (
    <Styled.PowerfulWrapper>
      <Styled.PowerfulContainer>
        <Styled.PowerfulInfoWrapper>
          <h3>{title}</h3>
          <p>{description}</p>
          <a href={link}>
            Try for Free <BsArrowRight />
          </a>
        </Styled.PowerfulInfoWrapper>
        <Styled.PowerfulImageWrapper>
          <img src={STRAPI_API + image?.url} alt="" />
        </Styled.PowerfulImageWrapper>
      </Styled.PowerfulContainer>
    </Styled.PowerfulWrapper>
  );
};
