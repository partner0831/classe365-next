import React from "react";
import * as Styled from "./title.styles";

export const ROITitle: React.FC = () => {
  return (
    <Styled.ROITitleWrapper>
      <h1>ROI Calculator</h1>
      <p>
        {
          "This ROI calculator simulates the potential return on investment that you could realize* by using single student administration (SIS) and learning management (LMS) and customer relationship management software from Classe365."
        }
      </p>
    </Styled.ROITitleWrapper>
  );
};
