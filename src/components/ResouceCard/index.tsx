import Image from "next/image";
import React from "react";
import { STRAPI_API } from "@/config";
import type { IResourceCardProps } from "@/types";
import * as Styled from "./resource.styles";

export const ResourceCard: React.FC<IResourceCardProps> = ({
  badge,
  badge_color,
  title,
  image,
}) => {
  return (
    <Styled.ResourceCardWrapper>
      <Styled.ImageWrapper>
        <Image
          src={image?.url ? STRAPI_API + image?.url : image}
          alt={``}
          width={344}
          height={159}
        />
      </Styled.ImageWrapper>
      <span style={{ background: badge_color }}>{badge}</span>
      <h2>{title}</h2>
    </Styled.ResourceCardWrapper>
  );
};
