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

        <Styled.SoftwareImageWrapper>
          <img src={"/assets/images/testimonials/test3.png"} alt="image" />
          <div>
            <p>
              The best about Classe365 is how easy it is to create new fields,
              new forms, new courses. It has a great flexibility. At the same
              time I feel that all the information about our students and
              courses are in a safe place. I also like a lot the relation to my
              customer service dude, [sensitive content hidden], who is very
              available, who knows everything about my institution and who has
              always worked through every request until solution.
            </p>
          </div>
        </Styled.SoftwareImageWrapper>
      </Styled.SoftwareView>
    </Styled.GreateWrapper>
  );
};
