import React from "react";
import * as Styled from "./great.styles";
import Image from "next/image";
import { StarIcon } from "@/components";
export const GreatSoftware: React.FC = () => {
  return (
    <Styled.GreateWrapper>
      <Styled.SoftwareView>
        <Styled.SoftwareWrapper>
          <h1>Great software with an excellent answer from all the team</h1>
          <h4>Joaquim Bandeira</h4>
          <h2>CEO</h2>
          <h2>Cascais School of Arts & Design</h2>
          <StarIcon />
          <h3>Ease of Use | Customer Service | Features</h3>
          <h2>Value for Money</h2>
        </Styled.SoftwareWrapper>

        <Image
          src={"/assets/images/testimonials/test2.png"}
          width={847}
          height={464}
          alt="image"
        />
      </Styled.SoftwareView>
    </Styled.GreateWrapper>
  );
};
