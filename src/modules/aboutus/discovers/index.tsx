import React from "react";
import * as Styled from "./discover.styles";
import { plandata } from "./data";
import { YearPlanIcon } from "@/components/SVGs/others";

export const DiscoversIT: React.FC = () => {
  return (
    <Styled.DiscoverWrapper>
      <h1>Discover Our Story</h1>
      <Styled.PlanView>
        <Styled.YearCard>
          <h2>Founded 2013.</h2>
          <h3>
            The company was born in the cloud and started selling SIS solutions.
          </h3>
          <YearPlanIcon />
        </Styled.YearCard>
        <Styled.PlanCard>
          <Styled.Line />
          {plandata.map((item, key) => (
            <Styled.PlanContainer key={key}>
              <div className="year-plan">
                <Styled.YearContent>{item.year}</Styled.YearContent>
                <Styled.YearView>
                  <Styled.Rectangle />
                  <Styled.DotStick />
                </Styled.YearView>
              </div>
              <span>{item.content}</span>
            </Styled.PlanContainer>
          ))}
        </Styled.PlanCard>
      </Styled.PlanView>
      <Styled.LandingCountWrapper>
        <p>
          Classe365 is Designed to Revolutionize and Redefine Education For All
        </p>
        <span>
          At Classe365, we are dedicated to the vision of making education
          accessible, efficient, and customized to cater to the individual needs
          of learners and educational institutions.
        </span>
      </Styled.LandingCountWrapper>
    </Styled.DiscoverWrapper>
  );
};
