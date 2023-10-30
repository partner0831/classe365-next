import React from "react";
import { Stepper as StepperModule } from "react-form-stepper";
import type { IStepper } from "@/types";
import * as Styled from "./stepper.styles";

const Stepper: React.FC<IStepper> = ({ steps, activeStep }) => {
  return (
    <Styled.StepperWrapper>
      <StepperModule
        steps={steps}
        activeStep={activeStep}
        className="stepper-wrapper"
        stepClassName="stepper-item"
      />
    </Styled.StepperWrapper>
  );
};

export default Stepper;
