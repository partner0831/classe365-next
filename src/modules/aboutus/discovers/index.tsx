import React from "react";
import * as Styled from "./discover.styles";

export const DiscoversIT: React.FC = () => {
  return (
    <Styled.DiscoverWrapper>
      <h1>Discover Our Story</h1>
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
