import React from "react";
import * as Styled from "./items.styles";

type Props = {
  onNext: (step: number) => void;
  onBack: (step: number) => void;
};

export const Benefits: React.FC<Props> = ({ onBack, onNext }) => {
  const handleNext = () => {
    onNext(2);
  };

  const handleBack = () => {
    onBack(2);
  };
  return (
    <Styled.ItemCardWrapper width={1110}>
      <p>
        {
          "On this page you will find the high-level inputs that can be used to customize the analysis for a specific organization. You may change the default values by editing the yellow cells labeled “Value for Calculations”. Changing the default values to match the customer’s actual situation will produce a more accurate analysis."
        }
      </p>
      <Styled.CostInfoFormGroup>
        <Styled.CardTitle>Cost Information</Styled.CardTitle>
        <Styled.CostInfoFormRowWrapper className="header">
          <Styled.CostInfoFormLabel></Styled.CostInfoFormLabel>
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
            <p>What is your organization’s revenue?</p>
          </Styled.CostInfoFormLabel>
          <Styled.CostInfoFormValueWrapper>
            <Styled.CostInfoFormYearCell></Styled.CostInfoFormYearCell>
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
            <p>What is your organization’s gross profit margin?</p>
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
        <Styled.CardTitle>
          Benefit Information – Decreasing Costs
        </Styled.CardTitle>
        <Styled.CostInfoFormRowWrapper>
          <Styled.CostInfoFormLabel>
            <h3>Reduce Administrative Costs</h3>
          </Styled.CostInfoFormLabel>
          <Styled.CostInfoFormValueWrapper>
            <Styled.CostInfoFormYearCell></Styled.CostInfoFormYearCell>
            <Styled.CostInfoFormValueCell>
              <Styled.CostInfoFormInputWrapper className="disabled">
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
            <p>Total burdened cost of administrative staff</p>
          </Styled.CostInfoFormLabel>
          <Styled.CostInfoFormValueWrapper>
            <Styled.CostInfoFormYearCell></Styled.CostInfoFormYearCell>
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
            <p>% savings in productivity and related cost</p>
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
            <p>Total burdened cost of teachers</p>
          </Styled.CostInfoFormLabel>
          <Styled.CostInfoFormValueWrapper>
            <Styled.CostInfoFormYearCell></Styled.CostInfoFormYearCell>
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
            <p>% savings in productivity and related cost</p>
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
            <h3>Reduced cost in stationary, printing & record keeping</h3>
          </Styled.CostInfoFormLabel>
          <Styled.CostInfoFormValueWrapper>
            <Styled.CostInfoFormYearCell></Styled.CostInfoFormYearCell>
            <Styled.CostInfoFormValueCell>
              <Styled.CostInfoFormInputWrapper className="disabled">
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
            <p>Average cost of printing and record keeping</p>
          </Styled.CostInfoFormLabel>
          <Styled.CostInfoFormValueWrapper>
            <Styled.CostInfoFormYearCell></Styled.CostInfoFormYearCell>
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
            <p>Average number of pages printed per student/staff</p>
          </Styled.CostInfoFormLabel>
          <Styled.CostInfoFormValueWrapper>
            <Styled.CostInfoFormYearCell></Styled.CostInfoFormYearCell>
            <Styled.CostInfoFormValueCell>
              <Styled.CostInfoFormInputWrapper>
                <input type="text" value="12" />
              </Styled.CostInfoFormInputWrapper>
            </Styled.CostInfoFormValueCell>
            <Styled.CostInfoFormValueCell>
              <Styled.CostInfoFormInputWrapper className="disabled">
                <input type="text" value="12" readOnly />
              </Styled.CostInfoFormInputWrapper>
            </Styled.CostInfoFormValueCell>
          </Styled.CostInfoFormValueWrapper>
        </Styled.CostInfoFormRowWrapper>
        <Styled.CostInfoFormRowWrapper>
          <Styled.CostInfoFormLabel>
            <p>Total number of students + staff</p>
          </Styled.CostInfoFormLabel>
          <Styled.CostInfoFormValueWrapper>
            <Styled.CostInfoFormYearCell></Styled.CostInfoFormYearCell>
            <Styled.CostInfoFormValueCell>
              <Styled.CostInfoFormInputWrapper className="disabled">
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
      </Styled.CostInfoFormGroup>

      <Styled.CostInfoFormGroup>
        <Styled.CostInfoFormRowWrapper>
          <Styled.CostInfoFormLabel>
            <h3>Reduced cost of running IT Systems</h3>
          </Styled.CostInfoFormLabel>
          <Styled.CostInfoFormValueWrapper>
            <Styled.CostInfoFormYearCell></Styled.CostInfoFormYearCell>
            <Styled.CostInfoFormValueCell>
              <Styled.CostInfoFormInputWrapper className="disabled">
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
            <p>Reduced cost in server</p>
          </Styled.CostInfoFormLabel>
          <Styled.CostInfoFormValueWrapper>
            <Styled.CostInfoFormYearCell></Styled.CostInfoFormYearCell>
            <Styled.CostInfoFormValueCell>
              <Styled.CostInfoFormInputWrapper className="disabled">
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
            <p>Total number of on-premises servers required</p>
          </Styled.CostInfoFormLabel>
          <Styled.CostInfoFormValueWrapper>
            <Styled.CostInfoFormYearCell></Styled.CostInfoFormYearCell>
            <Styled.CostInfoFormValueCell>
              <Styled.CostInfoFormInputWrapper>
                <input type="text" value="4" />
              </Styled.CostInfoFormInputWrapper>
            </Styled.CostInfoFormValueCell>
            <Styled.CostInfoFormValueCell>
              <Styled.CostInfoFormInputWrapper className="disabled">
                <input type="text" value="4" readOnly />
              </Styled.CostInfoFormInputWrapper>
            </Styled.CostInfoFormValueCell>
          </Styled.CostInfoFormValueWrapper>
        </Styled.CostInfoFormRowWrapper>
      </Styled.CostInfoFormGroup>

      <Styled.CostInfoFormGroup>
        <Styled.CardTitle>
          Benefit Information – Improving Business Outcomes
        </Styled.CardTitle>
        <Styled.CostInfoFormRowWrapper>
          <Styled.CostInfoFormLabel>
            <h3>Increase End-User Productivity</h3>
          </Styled.CostInfoFormLabel>
          <Styled.CostInfoFormValueWrapper>
            <Styled.CostInfoFormYearCell></Styled.CostInfoFormYearCell>
            <Styled.CostInfoFormValueCell>
              <Styled.CostInfoFormInputWrapper className="disabled">
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
            <p>How many minutes per day can administrators save</p>
          </Styled.CostInfoFormLabel>
          <Styled.CostInfoFormValueWrapper>
            <Styled.CostInfoFormYearCell>
              <input type="text" value="Minutes" />
            </Styled.CostInfoFormYearCell>
            <Styled.CostInfoFormValueCell>
              <Styled.CostInfoFormInputWrapper className="disabled">
                <input type="text" value="10" />
              </Styled.CostInfoFormInputWrapper>
            </Styled.CostInfoFormValueCell>
            <Styled.CostInfoFormValueCell>
              <Styled.CostInfoFormInputWrapper className="disabled">
                <span>USD</span>
                <input type="text" value="10" readOnly />
              </Styled.CostInfoFormInputWrapper>
            </Styled.CostInfoFormValueCell>
          </Styled.CostInfoFormValueWrapper>
        </Styled.CostInfoFormRowWrapper>
        <Styled.CostInfoFormRowWrapper>
          <Styled.CostInfoFormLabel>
            <p>How many minutes per day can teachers save</p>
          </Styled.CostInfoFormLabel>
          <Styled.CostInfoFormValueWrapper>
            <Styled.CostInfoFormYearCell>
              <input type="text" value="Minutes" />
            </Styled.CostInfoFormYearCell>
            <Styled.CostInfoFormValueCell>
              <Styled.CostInfoFormInputWrapper>
                <input type="text" value="10" />
              </Styled.CostInfoFormInputWrapper>
            </Styled.CostInfoFormValueCell>
            <Styled.CostInfoFormValueCell>
              <Styled.CostInfoFormInputWrapper className="disabled">
                <input type="text" value="10" readOnly />
              </Styled.CostInfoFormInputWrapper>
            </Styled.CostInfoFormValueCell>
          </Styled.CostInfoFormValueWrapper>
        </Styled.CostInfoFormRowWrapper>
      </Styled.CostInfoFormGroup>

      <Styled.CostInfoFormGroup>
        <Styled.CostInfoFormRowWrapper>
          <Styled.CostInfoFormLabel>
            <h3>Real Estate Savings</h3>
          </Styled.CostInfoFormLabel>
          <Styled.CostInfoFormValueWrapper>
            <Styled.CostInfoFormYearCell></Styled.CostInfoFormYearCell>
            <Styled.CostInfoFormValueCell>
              <Styled.CostInfoFormInputWrapper className="disabled">
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
            <p>Per Sq/mtr Cost of School building</p>
          </Styled.CostInfoFormLabel>
          <Styled.CostInfoFormValueWrapper>
            <Styled.CostInfoFormYearCell></Styled.CostInfoFormYearCell>
            <Styled.CostInfoFormValueCell>
              <Styled.CostInfoFormInputWrapper className="disabled">
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
            <p>Floor space freed with with reduction in record keeping</p>
          </Styled.CostInfoFormLabel>
          <Styled.CostInfoFormValueWrapper>
            <Styled.CostInfoFormYearCell>
              <input type="text" value="Sq Ft" />
            </Styled.CostInfoFormYearCell>
            <Styled.CostInfoFormValueCell>
              <Styled.CostInfoFormInputWrapper>
                <span>USD</span>
                <input type="text" value="50" />
              </Styled.CostInfoFormInputWrapper>
            </Styled.CostInfoFormValueCell>
            <Styled.CostInfoFormValueCell>
              <Styled.CostInfoFormInputWrapper className="disabled">
                <span>USD</span>
                <input type="text" value="40" readOnly />
              </Styled.CostInfoFormInputWrapper>
            </Styled.CostInfoFormValueCell>
          </Styled.CostInfoFormValueWrapper>
        </Styled.CostInfoFormRowWrapper>
      </Styled.CostInfoFormGroup>

      <Styled.CostInfoFormGroup>
        <Styled.CostInfoFormRowWrapper>
          <Styled.CostInfoFormLabel>
            <h3>Net New Revenue from e-Commerce Module</h3>
          </Styled.CostInfoFormLabel>
          <Styled.CostInfoFormValueWrapper>
            <Styled.CostInfoFormYearCell></Styled.CostInfoFormYearCell>
            <Styled.CostInfoFormValueCell>
              <Styled.CostInfoFormInputWrapper className="disabled">
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
              Potential net revenue earned per child selling school stationary,
              merchandise, electronics etc.
            </p>
          </Styled.CostInfoFormLabel>
          <Styled.CostInfoFormValueWrapper>
            <Styled.CostInfoFormYearCell></Styled.CostInfoFormYearCell>
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
      </Styled.CostInfoFormGroup>

      <Styled.CostInfoFormGroup>
        <Styled.CostInfoFormRowWrapper>
          <Styled.CostInfoFormLabel>
            <h3>Increase Organisation Brand</h3>
          </Styled.CostInfoFormLabel>
          <Styled.CostInfoFormValueWrapper>
            <Styled.CostInfoFormYearCell></Styled.CostInfoFormYearCell>
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
              {
                "% Increase in brand equity using innovative education technology (Increased use of technology has direct influence in brand of education institutions)"
              }
            </p>
          </Styled.CostInfoFormLabel>
          <Styled.CostInfoFormValueWrapper>
            <Styled.CostInfoFormYearCell></Styled.CostInfoFormYearCell>
            <Styled.CostInfoFormValueCell>
              <Styled.CostInfoFormInputWrapper className="disabled">
                <input type="text" value="1%" />
              </Styled.CostInfoFormInputWrapper>
            </Styled.CostInfoFormValueCell>
            <Styled.CostInfoFormValueCell>
              <Styled.CostInfoFormInputWrapper className="disabled">
                <input type="text" value="1%" readOnly />
              </Styled.CostInfoFormInputWrapper>
            </Styled.CostInfoFormValueCell>
          </Styled.CostInfoFormValueWrapper>
        </Styled.CostInfoFormRowWrapper>
        <Styled.CostInfoFormRowWrapper>
          <Styled.CostInfoFormLabel>
            <p>Potential increase in revenue with adaptive technologies</p>
          </Styled.CostInfoFormLabel>
          <Styled.CostInfoFormValueWrapper>
            <Styled.CostInfoFormYearCell></Styled.CostInfoFormYearCell>
            <Styled.CostInfoFormValueCell>
              <Styled.CostInfoFormInputWrapper className="disabled">
                <span>USD</span>
                <input type="text" value="1000" />
              </Styled.CostInfoFormInputWrapper>
            </Styled.CostInfoFormValueCell>
            <Styled.CostInfoFormValueCell>
              <Styled.CostInfoFormInputWrapper className="disabled">
                <span>USD</span>
                <input type="text" value="1000" readOnly />
              </Styled.CostInfoFormInputWrapper>
            </Styled.CostInfoFormValueCell>
          </Styled.CostInfoFormValueWrapper>
        </Styled.CostInfoFormRowWrapper>
      </Styled.CostInfoFormGroup>

      <Styled.CostInfoFormGroup>
        <Styled.CardTitle>
          Benefit Information – Environmental Sustainability
        </Styled.CardTitle>
        <Styled.CostInfoFormRowWrapper>
          <Styled.CostInfoFormLabel>
            <h3>Environmental cost savings</h3>
          </Styled.CostInfoFormLabel>
          <Styled.CostInfoFormValueWrapper>
            <Styled.CostInfoFormYearCell></Styled.CostInfoFormYearCell>
            <Styled.CostInfoFormValueCell>
              <Styled.CostInfoFormInputWrapper className="disabled">
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
            <p>Cost per ton/tonne of CO2 of carbon offsets</p>
          </Styled.CostInfoFormLabel>
          <Styled.CostInfoFormValueWrapper>
            <Styled.CostInfoFormYearCell></Styled.CostInfoFormYearCell>
            <Styled.CostInfoFormValueCell>
              <Styled.CostInfoFormInputWrapper className="disabled">
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
              1 Tree makes 8333 sheets. 1 tree offset 1 Tonne of Co2 during its
              life time. Trees saved=
            </p>
          </Styled.CostInfoFormLabel>
          <Styled.CostInfoFormValueWrapper>
            <Styled.CostInfoFormYearCell></Styled.CostInfoFormYearCell>
            <Styled.CostInfoFormValueCell>
              <Styled.CostInfoFormInputWrapper className="disabled">
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
            <p>Co2 offset from energy savings from onpremisis server</p>
          </Styled.CostInfoFormLabel>
          <Styled.CostInfoFormValueWrapper>
            <Styled.CostInfoFormYearCell></Styled.CostInfoFormYearCell>
            <Styled.CostInfoFormValueCell>
              <Styled.CostInfoFormInputWrapper className="disabled">
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
      </Styled.CostInfoFormGroup>
      <Styled.CostInfoButtonWrapper>
        <Styled.BackButton onClick={handleBack}>Back</Styled.BackButton>
        <Styled.NextButton onClick={handleNext}>Next</Styled.NextButton>
      </Styled.CostInfoButtonWrapper>
    </Styled.ItemCardWrapper>
  );
};
