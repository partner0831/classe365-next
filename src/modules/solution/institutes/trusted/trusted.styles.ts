import { styled } from "styled-components";

export const TrustedSectionWrapper = styled.div`
  padding: 120px 0;
  max-width: 1240px;
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  p {
    text-align: center;
    margin-bottom: 32px;
    color: #1e2123;
    font-size: 18px;
    font-weight: 500;
  }
  @media screen and (max-width: 768px) {
    padding: 80px 0;
    p {
      font-size: 14px;
    }
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
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
    gap: 40px;
  }
`;
