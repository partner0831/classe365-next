import React from "react";
import { BsArrowRight } from "react-icons/bs";
import * as Styled from "./access.styles";

export const Access: React.FC = () => {
  return (
    <Styled.AccessWrapper>
      <Styled.AccessTextWrapper>
        <h1>Access to Demo Account</h1>
        <p>
          {
            "Did you just want to get access to the demo account? No worries, provide us your information and we'll send login information to our demo platform."
          }
        </p>
      </Styled.AccessTextWrapper>
      <Styled.AccessFormWrapper>
        <Styled.AccessFormGroup>
          <Styled.AccessFormInput>
            <p>
              Organization Name <span>*</span>
            </p>
            <input type="text" />
          </Styled.AccessFormInput>
          <Styled.AccessFormInput>
            <p>
              Total Number of Students <span>*</span>
            </p>
            <input type="text" />
            <span>Please enter a number greater than or equal </span>
          </Styled.AccessFormInput>
        </Styled.AccessFormGroup>
        <Styled.AccessFormGroup>
          <Styled.AccessFormInput>
            <p>
              Email <span>*</span>
            </p>
            <input type="text" />
          </Styled.AccessFormInput>
          <Styled.AccessFormInput>
            <p>
              Confirm Email <span>*</span>
            </p>
            <input type="text" />
          </Styled.AccessFormInput>
        </Styled.AccessFormGroup>
        <Styled.AccessFormGroup>
          <Styled.AccessFormInput>
            <p>
              Your Full Name <span>*</span>
            </p>
            <input type="text" />
          </Styled.AccessFormInput>
          <Styled.AccessFormInput>
            <p>
              Email Address <span>*</span>
            </p>
            <input type="text" />
          </Styled.AccessFormInput>
        </Styled.AccessFormGroup>
        <Styled.AccessFormInput>
          <p>
            Contact Number <span>*</span>
          </p>
          <input type="text" />
        </Styled.AccessFormInput>
        <Styled.FormButton>
          <span>Get Access</span>
          <BsArrowRight />
        </Styled.FormButton>
      </Styled.AccessFormWrapper>
    </Styled.AccessWrapper>
  );
};
