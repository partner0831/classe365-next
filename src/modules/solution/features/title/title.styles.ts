import { styled } from "styled-components";

export const TitleSectionWrapper = styled.div`
  padding: 80px 0 70px;
  max-width: 983px;
  width: 95%;
  margin: auto;
  text-align: center;
  h4 {
    color: #2d6ccb;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 1.4px;
    margin-bottom: 26px;
    text-transform: uppercase;
  }
  h1 {
    color: #1e2123;
    font-size: 36px;
    font-weight: 700;
  }
  @media screen and (max-width: 768px) {
    padding: 50px 0;
    h4 {
      font-size: 12px;
      margin-bottom: 13px;
    }
    h1 {
      font-size: 24px;
      max-width: 500px;
      margin: auto;
    }
  }
`;
