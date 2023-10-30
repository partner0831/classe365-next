import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { STRAPI_API } from "@/config";
import * as Styled from "./manage.styles";

type Props = {
  title: string;
  description: string;
  link: string;
  image: any;
};

export const Manage: React.FC<Props> = ({
  image,
  link,
  description,
  title,
}) => {
  return (
    <Styled.ManageSectionWrapper>
      <Styled.ManageContainer>
        <Styled.ManageInfoWrapper>
          <h3>{title}</h3>
          <p>{description}</p>
          <a href={link}>
            Try for Free <BsArrowRight />
          </a>
        </Styled.ManageInfoWrapper>
        <Styled.ManageImageWrapper>
          <img src={STRAPI_API + image?.url} alt="" />
        </Styled.ManageImageWrapper>
      </Styled.ManageContainer>
    </Styled.ManageSectionWrapper>
  );
};
