import React from "react";
import { BsArrowRight } from "react-icons/bs";
import * as Comp from "@/components";
import * as Styled from "./landing.styles";

export const Landing: React.FC = () => {
  return (
    <Styled.LandingWrapper>
      <h1>Customers Tell It Better</h1>
      <p>
        {
          "Unlock your academy's full potential with Classe365 Student Management Software."
        }
      </p>
      <Styled.LandingButtonWrapper>
        <Comp.Button
          bg="#6772E5"
          border="#6772E5"
          font="#fff"
          className="shadow"
        >
          <span>Try For Free</span>
          <BsArrowRight />
        </Comp.Button>
        <Comp.Button bg="transparent" border="#6772E5" font="#6772E5">
          Book a Demo
        </Comp.Button>
      </Styled.LandingButtonWrapper>
      <Styled.LandingCountWrapper>
        <div>
          <h2>Top 100</h2>
          <p>Hight Growth Company - Financial Times</p>
        </div>
        <div>
          <h2>5,500+</h2>
          <p>Education institutions</p>
        </div>
        <div>
          <h2>In 130+</h2>
          <p>Countries & 6 AM Active Users Daily</p>
        </div>
      </Styled.LandingCountWrapper>
    </Styled.LandingWrapper>
  );
};
