import { styled } from "styled-components";

export const HelpingWrapper = styled.div`
  padding: 120px 0 0;
  background-color: #fafafa;
  margin-top: 120px;
  @media screen and (max-width: 768px) {
    padding: 60px 0 0;
    margin-top: 60px;
  }
`;

export const HelpingContainer = styled.div`
  max-width: 1240px;
  width: 95%;
  margin: auto;
  h1 {
    color: #1e2123;
    text-align: center;
    font-size: 36px;
    font-weight: 700;
    max-width: 675px;
    margin: auto;
    margin-bottom: 80px;
  }
  @media screen and (max-width: 768px) {
    h1 {
      font-size: 24px;
      max-width: 500px;
      margin-bottom: 40px;
    }
  }
`;

export const HelpingContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

export const HelpingImageWrapper = styled.div`
  max-width: 636px;
  margin-right: 40px;
  width: 60%;
  img {
    width: 100%;
    height: auto;
  }
  @media screen and (max-width: 768px) {
    max-width: 100%;
    width: 100%;
    margin-right: 0;
  }
`;

export const HelpingInfoWrapper = styled.div`
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
