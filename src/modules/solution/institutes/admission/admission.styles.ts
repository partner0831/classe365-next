import { styled } from "styled-components";

export const AdmissionWrapper = styled.div`
  padding: 120px 0;
  display: flex;
  max-width: 1240px;
  width: 95%;
  margin: auto;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
  @media screen and (max-width: 768px) {
    padding: 60px 0;
  }
`;

export const AdmissionInfoWrapper = styled.div`
  max-width: 407px;
  width: 100%;
  margin-right: 90px;
  h1 {
    color: #1e2123;
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 24px;
  }
  p {
    color: #555;
    font-size: 16px;
    font-weight: 400;
    line-height: 28px; /* 175% */
  }
  @media screen and (max-width: 1024px) {
    max-width: 100%;
    margin-bottom: 40px;
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 24px;
    h1 {
      font-size: 24px;
      margin-bottom: 12px;
    }
    p {
      font-size: 14px;
      line-height: 20px;
    }
  }
`;

export const AdmissionGridWrapper = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 64px;
  @media screen and (max-width: 768px) {
    gap: 32px;
  }
  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const AdmissionItemWrapper = styled.div`
  img {
    height: 92px;
    width: auto;
    margin-bottom: 24px;
  }
  h4 {
    color: #1e2123;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 18px;
  }
  p {
    color: #3b3f42;
    font-size: 16px;
    font-weight: 400;
    line-height: 28px; /* 175% */
  }
  @media screen and (max-width: 768px) {
    img {
      height: 70px;
      margin-bottom: 12px;
    }
    h4 {
      font-size: 16px;
      margin-bottom: 10px;
    }
    p {
      font-size: 12px;
      line-height: 20px;
    }
  }
`;
