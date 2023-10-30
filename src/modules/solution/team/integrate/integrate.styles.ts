import { styled } from "styled-components";

export const IntegrateWrapper = styled.div`
  padding: 0 0 120px;
  max-width: 1240px;
  margin: auto;
  width: 95%;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    padding: 0 0 60px;
  }
`;

export const IntegrateImageWrapper = styled.div`
  flex: 1;
  img {
    width: 100%;
  }
`;

export const IntegrateInfoWrapper = styled.div`
  max-width: 450px;
  margin-left: 16px;
  width: 40%;
  text-align: right;
  h1 {
    margin-bottom: 32px;
    color: #1e2123;
    text-align: right;
    font-size: 36px;
    font-weight: 700;
  }
  p {
    color: #3b3f42;
    text-align: right;
    font-size: 18px;
    font-weight: 400;
    max-width: 409px;
    margin-left: auto;
  }
  @media screen and (max-width: 768px) {
    max-width: 100%;
    margin-left: 0;
    width: 100%;
    h1 {
      text-align: center;
      font-size: 24px;
      margin-bottom: 16px;
    }
    p {
      text-align: center;
      font-size: 14px;
      margin: auto;
      margin-bottom: 20px;
    }
  }
`;
