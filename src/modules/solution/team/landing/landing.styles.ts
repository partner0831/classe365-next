import { styled } from "styled-components";

export const LandingSectionWrapper = styled.div`
  padding: 80px 0 0;
  max-width: 1240px;
  width: 95%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  h4 {
    margin-bottom: 28px;
    text-align: center;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 1.4px;
  }
  h1 {
    color: #1e2123;
    text-align: center;
    font-size: 36px;
    font-weight: 700;
    margin: auto;
    margin-bottom: 14px;
    max-width: 780px;
  }
  p {
    color: #555;
    text-align: center;
    font-size: 18px;
    font-weight: 400;
    line-height: 28px; /* 155.556% */
    max-width: 911px;
    margin: auto;
  }
  @media screen and (max-width: 768px) {
    padding: 40px 0 0;
    h4 {
      margin-bottom: 14px;
    }
    h1 {
      font-size: 24px;
      margin-bottom: 10px;
    }
    p {
      font-size: 14px;
      line-height: 20px;
    }
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
    width: 100%;
    flex-direction: column;
    & > :not(:first-child) {
      margin-left: 0;
      margin-top: 16px;
    }
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 80px;
  & > :not(:first-child) {
    margin-left: 72px;
  }
  @media screen and (max-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 72px;
    & > :not(:first-child) {
      margin-left: 0;
    }
    & > div {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    margin-top: 40px;
    gap: 40px;
  }
`;
