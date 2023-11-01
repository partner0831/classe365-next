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

        <Styled.SoftwareImageWrapper>
          <img src={"/assets/images/testimonials/test2.png"} alt="image" />
          <div>
            <p>
              Cascais School of Arts & Design use Classe 365 since 2018. During
              this years we needed some assistance and the team it was always
              disposable to answer our questions and resolve little problems.
              Sometimes they add new add ons with that tasks to the software and
              included at new versions. During 5 years we follow the growing of
              Classe365 from a small to a global company. They growth but they
              continuous to answer us like when they were small and this is very
              good and unfortunately never happen with companies that growing
              sow fast. Ashley continues to be disposable to Big and small
              companies and that&apos;s very good!
            </p>
          </div>
        </Styled.SoftwareImageWrapper>
      </Styled.SoftwareView>
    </Styled.GreateWrapper>
  );
};
