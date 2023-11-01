import React from "react";
import * as Styled from "./convinced.styles";
import Image from "next/image";
import { StarIcon } from "@/components";
export const Convinced: React.FC = () => {
  return (
    <Styled.GreateWrapper>
      <Styled.SoftwareView>
        <Styled.SoftwareWrapper>
          <h1>Convinced by Classe365</h1>
          <h4>Inken Krevet </h4>
          <h3>Director of International Academic Partnerships</h3>
          <h2>BESIGN The Sustainable Design School</h2>
          <StarIcon />
          <h3>Ease of Use | Customer Service | Features</h3>
          <h2>Value for Money</h2>
        </Styled.SoftwareWrapper>

        <Image
          src={"/assets/images/testimonials/test3.png"}
          width={847}
          height={464}
          alt="image"
        />
      </Styled.SoftwareView>
    </Styled.GreateWrapper>
  );
};
