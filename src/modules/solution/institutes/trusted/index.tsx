import React from "react";
import * as Data from "./data";
import * as Styled from "./trusted.styles";

export const Trusted: React.FC = () => {
  const { imgs } = Data;
  return (
    <Styled.TrustedSectionWrapper>
      <p>Trusted by 6000+ educational institutions in 130 countries</p>
      <Styled.ImageWrapper>
        {imgs.map((img, index) => (
          <div key={index}>
            <img src={img.src} alt="" width={img.width} />
          </div>
        ))}
      </Styled.ImageWrapper>
    </Styled.TrustedSectionWrapper>
  );
};
