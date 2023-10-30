import { styled } from "styled-components";

export const BoostSectionWrapper = styled.div`
  padding: 80px 0 0;
  max-width: 1240px;
  width: 95%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 40px 0 0;
  }
`;

export const BoostInfoWrapper = styled.div`
  max-width: 467px;
  width: 50%;
  & > h5 {
    margin-bottom: 12px;
    color: #4524aa;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
  }
  & > h1 {
    margin-bottom: 16px;
    color: #1e2123;
    font-size: 36px;
    font-weight: 700;
  }
  & > p {
    color: #555;
    font-size: 18px;
    font-weight: 400;
    line-height: 28px; /* 155.556% */
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    max-width: 100%;
    text-align: center;
    & > h1 {
      font-size: 24px;
    }
    & > p {
      font-size: 14px;
      line-height: 20px; /* 155.556% */
    }
  }
`;

export const BoostImageWrapper = styled.div`
  max-width: 640px;
  width: 100%;
  margin-left: 40px;
  img {
    width: 100%;
    height: auto;
  }
  @media screen and (max-width: 768px) {
    margin-left: 0;
    margin-top: 40px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 32px;
  & > :not(:first-child) {
    margin-left: 16px;
  }
  @media screen and (max-width: 768px) {
    justify-content: center;
  }
  @media screen and (max-width: 480px) {
    flex-direction: column;
    & > :not(:first-child) {
      margin-left: 0;
      margin-top: 16px;
    }
  }
`;
