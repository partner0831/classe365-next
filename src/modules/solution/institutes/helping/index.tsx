import React from "react";
import { STRAPI_API } from "@/config";
import * as Styled from "./helping.styles";

type Props = {
  header: string;
  image: any;
  title: string;
  description: string;
};

export const Helping: React.FC<Props> = ({
  description,
  header,
  image,
  title,
}) => {
  return (
    <Styled.HelpingWrapper>
      <Styled.HelpingContainer>
        <h1>{header}</h1>
        <Styled.HelpingContent>
          <Styled.HelpingImageWrapper>
            <img src={STRAPI_API + image?.url} alt="" />
          </Styled.HelpingImageWrapper>
          <Styled.HelpingInfoWrapper>
            <h3>{title}</h3>
            <p>{description}</p>
          </Styled.HelpingInfoWrapper>
        </Styled.HelpingContent>
      </Styled.HelpingContainer>
    </Styled.HelpingWrapper>
  );
};
