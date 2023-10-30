import { styled } from "styled-components";

export const DecreaseWrapper = styled.div`
  padding: 120px 0 0;
  background: #fafafa;
  @media screen and (max-width: 768px) {
    padding: 60px 0 0;
  }
`;

export const DecreaseContainer = styled.div`
  max-width: 1240px;
  width: 95%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const DecreaseInfoWrapper = styled.div`
  max-width: 434px;
  width: 40%;
  h3 {
    color: #1e2123;
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 24px;
  }
  p {
    color: #555;
    font-size: 16px;
    font-weight: 400;
    line-height: 28px; /* 175% */
  }
  @media screen and (max-width: 768px) {
    max-width: 100%;
    width: 100%;
    margin-bottom: 20px;
    h3 {
      font-size: 20px;
      margin-bottom: 14px;
    }
    p {
      font-size: 14px;
      line-height: 20px;
    }
  }
`;

export const DecreaseImageWrapper = styled.div`
  max-width: 636px;
  margin-left: 40px;
  width: 60%;
  img {
    width: 100%;
    height: auto;
  }
  @media screen and (max-width: 768px) {
    max-width: 100%;
    width: 100%;
    margin-left: 0;
  }
`;
