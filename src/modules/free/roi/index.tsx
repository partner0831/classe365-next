import React from "react";
import * as Styled from "./roi.styles";
import Image from "next/image";

export const ROICalculator: React.FC = () => {
  return (
    <Styled.ROIWrapper id="roi">
      <div>
        <h1>ROI Calculator</h1>
        <p>
          {
            "This ROI calculator simulates the potential return on investment that you could realize* by using single student administration (SIS) and learning management (LMS) and customer relationship management software from Classe365."
          }
        </p>
      </div>
      <Image
        src={"/assets/images/free/roi.png"}
        alt="roi"
        width={390}
        height={309}
      />
    </Styled.ROIWrapper>
  );
};
