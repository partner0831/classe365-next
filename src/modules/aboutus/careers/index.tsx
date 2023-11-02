import React from "react";
import * as Styled from "./careers.styles";
import * as Comp from "@/components";
import { BsArrowRight } from "react-icons/bs";
export const Careers: React.FC = () => {
  return (
    <Styled.CareersWrapper>
      <div>
        <h1>careers</h1>
        <h2>Join the Team</h2>
        <h3>
          As per the Financial Times, Classe365 is among the rapidly expanding
          companies in Asia Pacific, and we have even more ambitious plans for
          the future. Explore our current job openings and send in your resume.
          We eagerly await your response!
        </h3>
        <Comp.Button size="sm">
          <span>See Open Positions</span>
          <BsArrowRight />
        </Comp.Button>
      </div>
      <img src={"./assets/images/aboutus/join.png"} alt="carrer" />
    </Styled.CareersWrapper>
  );
};
