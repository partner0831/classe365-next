import React from "react";
import * as Styled from "./items.styles";

type Props = {
  onNext: (step: number) => void;
  onBack: (step: number) => void;
};

export const CostInfo: React.FC<Props> = ({ onBack, onNext }) => {
  const handleNext = () => {
    onNext(1);
  };

  const handleBack = () => {
    onBack(1);
  };
  return (
    <Styled.ItemCardWrapper width={1110}>
      <p>
        {
          "On this page you will find the high-level inputs that can be used to customize the analysis for a specific organization. You may change the default values by editing the yellow cells labeled “Value for Calculations”. Changing the default values to match the customer’s actual situation will produce a more accurate analysis."
        }
      </p>
      <Styled.CostInfoFormGroup>
        <Styled.CardTitle>Company Information</Styled.CardTitle>
        <Styled.CostInfoFormRowWrapper className="header">
          <Styled.CostInfoFormLabel>
            <h3>Cost Information of Onpremisis Solution</h3>
          </Styled.CostInfoFormLabel>
          <Styled.CostInfoFormValueWrapper>
            <Styled.CostInfoFormValueCell>
              <h3>Value for Calculations</h3>
            </Styled.CostInfoFormValueCell>
            <Styled.CostInfoFormValueCell>
              <h3>Suggested Values</h3>
            </Styled.CostInfoFormValueCell>
          </Styled.CostInfoFormValueWrapper>
        </Styled.CostInfoFormRowWrapper>
        <Styled.CostInfoFormRowWrapper>
          <Styled.CostInfoFormLabel>
            <p>
              What do you typically pay for datacenter or onpremisis server?
            </p>
          </Styled.CostInfoFormLabel>
          <Styled.CostInfoFormValueWrapper>
            <Styled.CostInfoFormYearCell>
              <input type="text" value="per year" />
            </Styled.CostInfoFormYearCell>
            <Styled.CostInfoFormValueCell>
              <Styled.CostInfoFormInputWrapper>
                <span>USD</span>
                <input type="text" value="16.000.00" />
              </Styled.CostInfoFormInputWrapper>
            </Styled.CostInfoFormValueCell>
            <Styled.CostInfoFormValueCell>
              <Styled.CostInfoFormInputWrapper className="disabled">
                <span>USD</span>
                <input type="text" value="16.000.00" readOnly />
              </Styled.CostInfoFormInputWrapper>
            </Styled.CostInfoFormValueCell>
          </Styled.CostInfoFormValueWrapper>
        </Styled.CostInfoFormRowWrapper>
        <Styled.CostInfoFormRowWrapper>
          <Styled.CostInfoFormLabel>
            <p>
              What do you typically pay for hardware maintenance annually as a
              percent of hardware cost?
            </p>
          </Styled.CostInfoFormLabel>
          <Styled.CostInfoFormValueWrapper>
            <Styled.CostInfoFormYearCell></Styled.CostInfoFormYearCell>
            <Styled.CostInfoFormValueCell>
              <Styled.CostInfoFormInputWrapper>
                <input type="text" value="12%" />
              </Styled.CostInfoFormInputWrapper>
            </Styled.CostInfoFormValueCell>
            <Styled.CostInfoFormValueCell>
              <Styled.CostInfoFormInputWrapper className="disabled">
                <input type="text" value="12%" readOnly />
              </Styled.CostInfoFormInputWrapper>
            </Styled.CostInfoFormValueCell>
          </Styled.CostInfoFormValueWrapper>
        </Styled.CostInfoFormRowWrapper>
        <Styled.CostInfoFormRowWrapper>
          <Styled.CostInfoFormLabel>
            <p>After how many years do you typically refresh software?</p>
          </Styled.CostInfoFormLabel>
          <Styled.CostInfoFormValueWrapper>
            <Styled.CostInfoFormYearCell></Styled.CostInfoFormYearCell>
            <Styled.CostInfoFormValueCell>
              <Styled.CostInfoFormInputWrapper>
                <input type="text" value="3" />
              </Styled.CostInfoFormInputWrapper>
            </Styled.CostInfoFormValueCell>
            <Styled.CostInfoFormValueCell>
              <Styled.CostInfoFormInputWrapper className="disabled">
                <input type="text" value="3" readOnly />
              </Styled.CostInfoFormInputWrapper>
            </Styled.CostInfoFormValueCell>
          </Styled.CostInfoFormValueWrapper>
        </Styled.CostInfoFormRowWrapper>
      </Styled.CostInfoFormGroup>
      <Styled.CostInfoFormGroup>
        <Styled.CostInfoFormRowWrapper>
          <Styled.CostInfoFormLabel>
            <h3>Cost Information of Onpremisis Solution</h3>
          </Styled.CostInfoFormLabel>
        </Styled.CostInfoFormRowWrapper>
        <Styled.CostInfoFormRowWrapper>
          <Styled.CostInfoFormLabel>
            <p>
              What is the total cost of your existing software running your
              school. This may includes LMS, SIS, HR, Finance, Alumni, Comms.
            </p>
          </Styled.CostInfoFormLabel>
          <Styled.CostInfoFormValueWrapper>
            <Styled.CostInfoFormYearCell>
              <input type="text" value="per year" />
            </Styled.CostInfoFormYearCell>
            <Styled.CostInfoFormValueCell>
              <Styled.CostInfoFormInputWrapper>
                <span>USD</span>
                <input type="text" value="16.000.00" />
              </Styled.CostInfoFormInputWrapper>
            </Styled.CostInfoFormValueCell>
            <Styled.CostInfoFormValueCell>
              <Styled.CostInfoFormInputWrapper className="disabled">
                <span>USD</span>
                <input type="text" value="16.000.00" readOnly />
              </Styled.CostInfoFormInputWrapper>
            </Styled.CostInfoFormValueCell>
          </Styled.CostInfoFormValueWrapper>
        </Styled.CostInfoFormRowWrapper>
        <Styled.CostInfoFormRowWrapper>
          <Styled.CostInfoFormLabel>
            <p>
              What do you typically pay for hardware maintenance annually as a
              percent of hardware cost?
            </p>
          </Styled.CostInfoFormLabel>
          <Styled.CostInfoFormValueWrapper>
            <Styled.CostInfoFormYearCell></Styled.CostInfoFormYearCell>
            <Styled.CostInfoFormValueCell>
              <Styled.CostInfoFormInputWrapper>
                <input type="text" value="12%" />
              </Styled.CostInfoFormInputWrapper>
            </Styled.CostInfoFormValueCell>
            <Styled.CostInfoFormValueCell>
              <Styled.CostInfoFormInputWrapper className="disabled">
                <input type="text" value="12%" readOnly />
              </Styled.CostInfoFormInputWrapper>
            </Styled.CostInfoFormValueCell>
          </Styled.CostInfoFormValueWrapper>
        </Styled.CostInfoFormRowWrapper>
      </Styled.CostInfoFormGroup>
      <Styled.CostInfoFormGroup>
        <Styled.CostInfoFormRowWrapper>
          <Styled.CostInfoFormLabel>
            <h3>Cost information of Human Resource</h3>
          </Styled.CostInfoFormLabel>
        </Styled.CostInfoFormRowWrapper>
        <Styled.CostInfoFormRowWrapper>
          <Styled.CostInfoFormLabel>
            <p>What is the average fully budjeted salary of your teachers ?</p>
          </Styled.CostInfoFormLabel>
          <Styled.CostInfoFormValueWrapper>
            <Styled.CostInfoFormYearCell>
              <input type="text" value="per year" />
            </Styled.CostInfoFormYearCell>
            <Styled.CostInfoFormValueCell>
              <Styled.CostInfoFormInputWrapper>
                <span>USD</span>
                <input type="text" value="16.000.00" />
              </Styled.CostInfoFormInputWrapper>
            </Styled.CostInfoFormValueCell>
            <Styled.CostInfoFormValueCell>
              <Styled.CostInfoFormInputWrapper className="disabled">
                <span>USD</span>
                <input type="text" value="16.000.00" readOnly />
              </Styled.CostInfoFormInputWrapper>
            </Styled.CostInfoFormValueCell>
          </Styled.CostInfoFormValueWrapper>
        </Styled.CostInfoFormRowWrapper>
        <Styled.CostInfoFormRowWrapper>
          <Styled.CostInfoFormLabel>
            <p>
              What is the average fully budjeted salary of IT administrators ?
            </p>
          </Styled.CostInfoFormLabel>
          <Styled.CostInfoFormValueWrapper>
            <Styled.CostInfoFormYearCell>
              <input type="text" value="per year" />
            </Styled.CostInfoFormYearCell>
            <Styled.CostInfoFormValueCell>
              <Styled.CostInfoFormInputWrapper>
                <span>USD</span>
                <input type="text" value="2000" />
              </Styled.CostInfoFormInputWrapper>
            </Styled.CostInfoFormValueCell>
            <Styled.CostInfoFormValueCell>
              <Styled.CostInfoFormInputWrapper className="disabled">
                <span>USD</span>
                <input type="text" value="200" readOnly />
              </Styled.CostInfoFormInputWrapper>
            </Styled.CostInfoFormValueCell>
          </Styled.CostInfoFormValueWrapper>
        </Styled.CostInfoFormRowWrapper>
        <Styled.CostInfoFormRowWrapper>
          <Styled.CostInfoFormLabel>
            <p>
              What is the average fully budgeted salary of office administrators
              ?
            </p>
          </Styled.CostInfoFormLabel>
          <Styled.CostInfoFormValueWrapper>
            <Styled.CostInfoFormYearCell>
              <input type="text" value="per year" />
            </Styled.CostInfoFormYearCell>
            <Styled.CostInfoFormValueCell>
              <Styled.CostInfoFormInputWrapper>
                <span>USD</span>
                <input type="text" value="3" />
              </Styled.CostInfoFormInputWrapper>
            </Styled.CostInfoFormValueCell>
            <Styled.CostInfoFormValueCell>
              <Styled.CostInfoFormInputWrapper className="disabled">
                <span>USD</span>
                <input type="text" value="3" readOnly />
              </Styled.CostInfoFormInputWrapper>
            </Styled.CostInfoFormValueCell>
          </Styled.CostInfoFormValueWrapper>
        </Styled.CostInfoFormRowWrapper>
      </Styled.CostInfoFormGroup>
      <Styled.CostInfoFormGroup>
        <Styled.CardTitle>Income Information</Styled.CardTitle>
        <Styled.CostInfoFormRowWrapper>
          <Styled.CostInfoFormLabel>
            <p>
              What is the average fees per student that the organisation collect
              per year?
            </p>
          </Styled.CostInfoFormLabel>
          <Styled.CostInfoFormValueWrapper>
            <Styled.CostInfoFormYearCell>
              <input type="text" value="per year" />
            </Styled.CostInfoFormYearCell>
            <Styled.CostInfoFormValueCell>
              <Styled.CostInfoFormInputWrapper>
                <span>USD</span>
                <input type="text" value="3" />
              </Styled.CostInfoFormInputWrapper>
            </Styled.CostInfoFormValueCell>
            <Styled.CostInfoFormValueCell>
              <Styled.CostInfoFormInputWrapper className="disabled">
                <span>USD</span>
                <input type="text" value="3" readOnly />
              </Styled.CostInfoFormInputWrapper>
            </Styled.CostInfoFormValueCell>
          </Styled.CostInfoFormValueWrapper>
        </Styled.CostInfoFormRowWrapper>
      </Styled.CostInfoFormGroup>
      <Styled.CostInfoButtonWrapper>
        <Styled.BackButton onClick={handleBack}>Back</Styled.BackButton>
        <Styled.NextButton onClick={handleNext}>Next</Styled.NextButton>
      </Styled.CostInfoButtonWrapper>
    </Styled.ItemCardWrapper>
  );
};
