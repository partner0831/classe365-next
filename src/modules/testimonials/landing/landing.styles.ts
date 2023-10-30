import styled from "styled-components";

export const LandingWrapper = styled.div`
  width: 95%;
  margin: auto;
  margin-top: 60px;
  text-align: center;
  & > h1 {
    color: #1e2123;
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 16px;
  }
  p {
    color: #3b3f42;
    font-size: 18px;
    font-weight: 400;
    line-height: 28px; /* 155.556% */
  }
  @media screen and (max-width: 768px) {
    margin-top: 40px;
    & > h1 {
      font-size: 24px;
      margin-bottom: 12px;
    }
    & > p {
      font-size: 14px;
    }
  }
`;

export const LandingButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 32px 0 40px;
  & > :not(:first-child) {
    margin-left: 16px;
  }
  @media screen and (max-width: 768px) {
    margin: 24px 0;
  }
  @media screen and (max-width: 480px) {
    flex-direction: column;
    width: 100%;
    & > :not(:first-child) {
      margin-left: 0;
      margin-top: 16px;
    }
  }
`;

export const LandingCountWrapper = styled.div`
  position: relative;
  max-width: 1030px;
  width: 95%;
  display: flex;
  justify-content: space-around;
  margin: auto;
  margin-top: 90px;
  padding: 40px;

  h2 {
    color: #1e2123;
    position: relative;
    z-index: 2;
    font-size: 36px;
    font-weight: 700;
    line-height: 28px; /* 77.778% */
    margin-bottom: 18px;
  }
  p {
    position: relative;
    z-index: 2;
    color: #555;
    max-width: 183px;
    margin: auto;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px; /* 150% */
  }
  &::after {
    content: "";
    position: absolute;
    left: -30px;
    right: -30px;
    bottom: 45px;
    top: -30px;
    border-radius: 30px;
    background: linear-gradient(
      180deg,
      #9382ff 0%,
      rgba(158, 202, 254, 0) 100%
    );
  }
  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    border-radius: 30px;
    background: rgba(255, 255, 255, 0.4);
    /* image elevations 1 */
    box-shadow: 0px 4px 20px 0px rgba(84, 84, 84, 0.25);
    z-index: 1;
  }
  @media screen and (max-width: 768px) {
    h2 {
      font-size: 24px;
      margin-bottom: 12px;
    }
    p {
      font-size: 14px;
    }
  }
  @media screen and (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    margin-top: 45px;
    div:not(:last-child) {
      margin-bottom: 16px;
    }
  }
`;
