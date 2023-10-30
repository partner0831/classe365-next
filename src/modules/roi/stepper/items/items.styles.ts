import styled from "styled-components";

export const ItemCardWrapper = styled.div<{ width: number }>`
  max-width: ${({ width }) => width}px;
  width: 95%;
  margin: auto;
  padding: 40px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 4px 0px 4px 0px rgba(212, 212, 212, 0.25),
    -4px 4px 4px 0px rgba(212, 212, 212, 0.25);
  backdrop-filter: blur(10px);
  & > p {
    max-width: 920px;
    width: 100%;
    margin: auto;
    margin-bottom: 40px;
    color: #3b3f42;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
  }
  @media screen and (max-width: 500px) {
    padding: 40px 20px;
  }
`;

export const CardTitle = styled.div`
  color: #1e2123;
  font-size: 24px;
  font-weight: 700;
  line-height: 17.987px; /* 74.947% */
  margin-bottom: 16px;
`;

export const OrgInfoFormWrapper = styled.div`
  margin-top: 80px;
  @media screen and (max-width: 768px) {
    margin-top: 40px;
  }
`;

export const OrgInfoFormRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  p {
    max-width: 270px;
    width: 100%;
    margin-right: 40px;
    color: #3b3f42;
    font-size: 16px;
    font-weight: 500;
    line-height: 17.987px;
  }
  input {
    max-width: 425px;
    font-size: 16px;
    color: #000;
    font-weight: 400;
    width: 100%;
    border-radius: 12px;
    border: 1px solid #dbdbdb;
    background: transparent;
    height: 60px;
    padding: 0 18px;
    outline: none;
    &::placeholder {
      color: #98b5cd;
    }
    &:disabled {
      background: #f1f6fa;
      border-color: transparent;
    }
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    p {
      max-width: 100%;
      margin-right: 0;
      margin-bottom: 12px;
    }
    input {
      max-width: 100%;
    }
  }
`;

export const OrgInfoButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
  p {
    max-width: 270px;
    width: 100%;
    margin-right: 40px;
  }
  div {
    max-width: 425px;
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    p {
      display: none;
    }
  }
`;

export const NextButton = styled.button`
  border-radius: 60px;
  background: #6772e5;
  padding: 12px 24px;
  width: 125px;
  border: none;
  outline: none;
  color: #fff;
  font-size: 16px;
  font-weight: 400;
`;

export const BackButton = styled.button`
  border-radius: 60px;
  padding: 12px 24px;
  font-weight: 400;
  font-size: 16px;
  width: 125px;
  color: #6772e5;
  border: 1px solid #6772e5;
  outline: none;
  background: transparent;
`;

export const CostInfoFormGroup = styled.div`
  margin-top: 50px;
`;

export const CostInfoFormRowWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  @media screen and (max-width: 768px) {
    &.header {
      display: none;
    }
    flex-direction: column;
  }
`;

export const CostInfoFormLabel = styled.div`
  max-width: 456px;
  width: 100%;
  margin-right: 40px;
  h3 {
    color: #1e2123;
    font-size: 18px;
    font-weight: 600;
    line-height: 17.987px; /* 99.93% */
  }
  @media screen and (max-width: 768px) {
    max-width: 100%;
    margin-right: 0;
    margin-bottom: 12px;
  }
`;

export const CostInfoFormValueWrapper = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    width: 100%;
    justify-content: flex-end;
  }
`;

export const CostInfoFormYearCell = styled.div`
  width: 91px;
  input {
    width: 100%;
    height: 59px;
    border-radius: 12px;
    border: 1px solid #dbdbdb;
    background: #fff;
    outline: none;
    color: #3b3f42;
    font-size: 16px;
    text-align: center;
    font-weight: 400;
  }
`;

export const CostInfoFormValueCell = styled.div`
  margin-left: 16px;
  width: 168px;
  display: flex;
  justify-content: center;
  h3 {
    max-width: 120px;
    color: #1e2123;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    line-height: 22px; /* 137.5% */
  }
`;

export const CostInfoFormInputWrapper = styled.div`
  border-radius: 12px;
  width: 100%;
  background: #fff;
  height: 59px;
  border: 1px solid #dbdbdb;
  background: #fff;
  display: flex;
  align-items: center;
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 54px;
    height: 100%;
    border-right: 1px solid #dbdbdb;
    color: #3b3f42;
    font-size: 16px;
    font-weight: 400;
  }
  input {
    text-align: right;
    width: 100%;
    border: none;
    outline: none;
    padding: 0 12px;
    background: transparent;
    height: 100%;
    color: #3b3f42;
    font-size: 16px;
    font-weight: 400;
  }
  &.disabled {
    background-color: #f1f6fa;
    border: 1px solid #f1f6fa;
    span {
      border-right: none;
    }
  }
`;

export const CostInfoButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 40px;
  & > :not(:first-child) {
    margin-left: 16px;
  }
`;

export const ResultSummaryWrapper = styled.div`
  display: flex;
  margin-top: 75px;
  margin-bottom: 80px;
`;

export const ResultSummaryTitle = styled.div`
  width: 180px;
  margin-right: 10px;
  white-space: nowrap;
  h4 {
    height: 46px;
    display: flex;
    align-items: center;
    color: #555;
    font-size: 16px;
    font-weight: 500;
    line-height: 17.987px; /* 112.421% */
  }
  div {
    padding: 34px 0;
    p {
      color: #555;
      font-size: 16px;
      font-weight: 500;
      line-height: 17.987px; /* 112.421% */
      &:not(:first-child) {
        padding-top: 24px;
      }
    }
  }
  h2 {
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    color: #1e2123;
    font-size: 18px;
    font-weight: 700;
    line-height: 17.987px; /* 99.93% */
    margin-top: 12px;
  }
`;

export const ResultSummaryYear = styled.div`
  flex: 1;
  h2 {
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #1e2123;
    font-size: 18px;
    font-weight: 700;
    line-height: 17.987px; /* 99.93% */
    background: #f1f6fa;
    border-radius: 12px;
  }
`;

export const ResultSummaryYearGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-bottom: 12px;
  grid-gap: 10px;
  & > div {
    background-color: #fafafa;
    border-radius: 12px;
    contain: content;
    h4 {
      height: 46px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #f1f6fa;
      color: #555;
      font-size: 16px;
      font-weight: 500;
      line-height: 17.987px; /* 112.421% */
    }
    div {
      padding: 34px 22px;
      p {
        color: #555;
        text-align: right;
        font-size: 16px;
        font-weight: 500;
        line-height: 17.987px; /* 112.421% */
        &:not(:first-child) {
          padding-top: 24px;
        }
      }
    }
  }
`;

export const ResultSummaryChart = styled.div`
  margin-left: 20px;
  max-width: 400px;
  display: flex;
  flex-direction: column;

  width: 100%;
  border-radius: 12px;
  background: #fafafa;
  padding: 22px 30px;
  h1 {
    color: #1e2123;
    font-size: 18px;
    font-weight: 700;
    line-height: 17.987px; /* 99.93% */
  }
  & > div {
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
    svg {
      & > rect {
        fill: transparent;
      }
    }
  }
`;

export const ResultPotentialWrapper = styled.div`
  margin-top: 48px;
  display: flex;
  padding-bottom: 80px;
`;

export const ResultPotentialContainer = styled.div`
  padding-right: 12px;
  flex: 1;
  margin-right: 20px;
  h4 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 0;
    position: relative;
    span {
      z-index: 1;
    }
    &::after {
      background: #f1f6fa;
      border-radius: 12px;
      content: "";
      position: absolute;
      left: -12px;
      right: -12px;
      top: 0;
      bottom: 0;
    }
  }
  div {
    &:not(.last-child) {
      padding-bottom: 32px;
      margin-bottom: 32px;
      border-bottom: 1px solid #f0f0f0;
    }
    &.last-child {
      margin-bottom: 44px;
    }
    h3 {
      color: #1e2123;
      font-size: 18px;
      font-weight: 600;
      line-height: 17.987px; /* 99.93% */
    }
    p {
      display: flex;
      justify-content: space-between;
      color: #555;
      font-size: 16px;
      font-weight: 500;
      line-height: 17.987px; /* 112.421% */
      &:not(:first-child) {
        margin-top: 24px;
      }
    }
  }
`;

export const ResultPotentialChart = styled.div`
  max-width: 400px;
  width: 100%;
  border-radius: 12px;
  background: #fafafa;
  display: flex;
  flex: 1 1;
  justify-content: center;
  svg {
    & > rect {
      fill: transparent;
    }
  }
`;

export const ResultBenefitWrapper = styled.div`
  padding-bottom: 80px;
  margin-top: 48px;
`;

export const ResultBenefitItem = styled.div`
  &:not(.last-child) {
    padding-bottom: 32px;
    margin-bottom: 32px;
    border-bottom: 1px solid #f0f0f0;
  }
  &.last-child {
    margin-bottom: 44px;
  }
`;

export const ResultBenefitRow = styled.div`
  display: flex;
  justify-content: space-between;
  &:first-child {
    margin-bottom: 32px;
  }
  &:not(:first-child) {
    margin-top: 24px;
  }
  h3 {
    color: #1e2123;
    font-size: 18px;
    font-weight: 600;
    line-height: 17.987px; /* 99.93% */
  }
  p {
    color: #555;
    font-size: 16px;
    font-weight: 500;
    line-height: 17.987px; /* 112.421% */
  }
  div {
    display: flex;
    justify-content: flex-end;
    margin-left: 20px;
    & > * {
      width: 84px;
      text-align: right;
      &:not(:first-child) {
        margin-left: 32px;
      }
    }
  }
  &.subtotal,
  &.total {
    position: relative;
    padding: 20px 0;
    & > * {
      position: relative;
      z-index: 1;
    }
    &::after {
      position: absolute;
      content: "";
      top: 0;
      bottom: 0;
      left: -12px;
      right: -12px;
      border-radius: 12px;
    }
  }
  &.subtotal {
    &::after {
      background: #fafafa;
    }
  }
  &.total {
    margin-top: 12px;
    &::after {
      background: #f1f6fa;
    }
  }
`;

export const ResultCostWrapper = styled.div`
  display: flex;
`;

export const ResultCostTitle = styled.div`
  width: 294px;
  header {
    height: 46px;
    border-radius: 12px 12px 0 0;
    background: #fafafa;
  }
  div {
    padding: 32px 0;
    p,
    h3 {
      display: flex;
      justify-content: space-between;
      color: #555;
      font-size: 16px;
      font-weight: 500;
      line-height: 17.987px; /* 112.421% */
      &:not(:first-child) {
        margin-top: 24px;
      }
    }
    h3 {
      color: #1e2123;
      font-weight: 500;
      span:first-child {
        font-size: 18px;
        font-weight: 700;
        line-height: 17.987px; /* 99.93% */
      }
    }
  }
`;

export const ResultCostGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-left: 14px;
  grid-gap: 10px;
`;

export const ResultCostGridItem = styled.div`
  width: 129px;
  background-color: #fafafa;
  border-radius: 0cap;
  header {
    background-color: #f1f6fa;
    border-radius: 12px 12px 0 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 46px;
  }
  div {
    padding: 32px 22px;
    p,
    h3 {
      color: #555;
      text-align: right;
      font-size: 16px;
      font-weight: 500;
      line-height: 17.987px; /* 112.421% */
      &:not(:first-child) {
        margin-top: 24px;
      }
    }
    h3 {
      font-weight: 700;
      color: #1e2123;
    }
  }
`;
