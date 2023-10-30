import { styled } from "styled-components";

export const LandingWrapper = styled.div`
  background: #fafafa;
  display: flex;
  align-items: flex-end;
  @media screen and (max-width: 1024px) {
    background: #fff;
    flex-direction: column;
    align-items: center;
  }
`;

export const LandingInfoWrapper = styled.div`
  flex: 1;
  div {
    display: flex;
    flex-direction: column;
    margin: auto;
    max-width: 724px;
    width: 95%;
  }
  img {
    width: 100%;
  }
  h4 {
    color: #2d6ccb;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 1.4px;
    margin-bottom: 24px;
  }
  h1 {
    color: #1e2123;
    font-size: 36px;
    margin-bottom: 16px;
    font-weight: 700;
  }
  p {
    color: #555;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px; /* 137.5% */
    margin-bottom: 54px;
  }
  @media screen and (max-width: 1024px) {
    padding: 50px 0;
    div {
      max-width: 100%;
      width: 95%;
    }
  }
  @media screen and (max-width: 768px) {
    h4 {
      font-size: 12px;
      margin-bottom: 12px;
    }
    h1 {
      font-size: 24px;
      margin-bottom: 8px;
    }
    p {
      font-size: 14px;
      margin-bottom: 30px;
    }
  }
`;

export const LandingDataWrapper = styled.div`
  max-width: 502px;
  width: 100%;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 1024px) {
    max-width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

export const LandingDataItem = styled.div`
  flex: 1;
  min-height: 191px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 24px 36px;
  h1 {
    color: #fff;
    font-size: 24px;
    font-weight: 700;
    padding-bottom: 12px;
  }
  p {
    color: #fff;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px; /* 157.143% */
  }
  @media screen and (max-width: 560px) {
    padding: 24px 24px;
    min-height: auto;
  }
`;
