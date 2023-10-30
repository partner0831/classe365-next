import { styled } from "styled-components";

export const FAQSectionWrapper = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1050px;
  width: 95%;
  margin: auto;
  padding: 150px 0;
  h1 {
    text-align: center;
    margin-bottom: 72px;
    color: #1e2123;
    font-size: 36px;
    font-weight: 700;
  }
  @media screen and (max-width: 768px) {
    padding: 70px 0;
    h1 {
      margin-bottom: 35px;
      font-size: 24px;
    }
  }
`;

export const FAQContainer = styled.div`
  & > :not(:first-child) {
    margin-top: 32px;
  }
  @media screen and (max-width: 768px) {
    & > :not(:first-child) {
      margin-top: 14px;
    }
  }
`;
