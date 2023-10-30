import React from "react";
import * as Styled from "./items.styles";

type Props = {
  onNext: (step: number) => void;
};

export const OrgInfo: React.FC<Props> = ({ onNext }) => {
  const handleNext = () => {
    onNext(0);
  };

  return (
    <Styled.ItemCardWrapper width={853}>
      <Styled.CardTitle>Organizational Information</Styled.CardTitle>
      <Styled.OrgInfoFormWrapper>
        <Styled.OrgInfoFormRow>
          <p>What is the organization’s name?</p>
          <input type="text" placeholder="Enter Organization Name" />
        </Styled.OrgInfoFormRow>
        <Styled.OrgInfoFormRow>
          <p>Where is the organization located?</p>
          <input type="text" placeholder="Enter Organization Location" />
        </Styled.OrgInfoFormRow>
        <Styled.OrgInfoFormRow>
          <p>Currency</p>
          <input type="text" value={"USD"} disabled />
        </Styled.OrgInfoFormRow>
        <Styled.OrgInfoFormRow>
          <p>How many students are there in the organisation?</p>
          <input type="text" placeholder="Number of Students" />
        </Styled.OrgInfoFormRow>
        <Styled.OrgInfoFormRow>
          <p>How many teachers are there in the organisation?</p>
          <input type="text" placeholder="Number of Teachers" />
        </Styled.OrgInfoFormRow>
        <Styled.OrgInfoFormRow>
          <p>How many administration officers are there in the organisation?</p>
          <input type="text" placeholder="Number of Admin Staff" />
        </Styled.OrgInfoFormRow>
        <Styled.OrgInfoButtonWrapper>
          <p />
          <div>
            <Styled.NextButton onClick={handleNext}>Next</Styled.NextButton>
          </div>
        </Styled.OrgInfoButtonWrapper>
      </Styled.OrgInfoFormWrapper>
    </Styled.ItemCardWrapper>
  );
};
