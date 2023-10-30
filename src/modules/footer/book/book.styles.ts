import { styled } from "styled-components";

export const BookSectionWrapper = styled.div`
  background-color: #6772e5;
  color: #fff;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const BookSectionContainer = styled.div`
  max-width: 1240px;
  width: 95%;
  margin: auto;
  position: absolute;
  * {
    transition: all 0.3s;
  }
  h2 {
    color: #fff;
    font-size: 36px;
    font-weight: 500;
  }
  h1 {
    color: #ffe92c;
    font-size: 48px;
    font-weight: 600;
  }
  p {
    color: #fff;
    font-size: 20px;
    font-weight: 400;
    margin: 18px 0 40px;
    max-width: 480px;
    width: 40%;
  }
  @media screen and (max-width: 1024px) {
    h2 {
      font-size: 30px;
    }
    h1 {
      font-size: 42px;
    }
    p {
      font-size: 18px;
      margin: 14px 0 30px;
      width: 45%;
    }
  }
  @media screen and (max-width: 768px) {
    position: relative;
    padding-top: 60px;
    p {
      width: 100%;
    }
  }
  @media screen and (max-width: 480px) {
    h2 {
      font-size: 24px;
    }
    h1 {
      font-size: 36px;
    }
    p {
      font-size: 16px;
    }
  }
`;

export const BookImageWrapper = styled.div`
  width: 60%;
  margin-left: auto;
  display: flex;
  padding-top: 16px;
  pointer-events: none;
  img {
    width: 100%;
    /* image-rendering: pixelated; */
  }
  @media screen and (max-width: 1024px) {
    width: 55%;
    padding-top: 32px;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    max-width: 1240px;
    width: 95%;
    margin: auto;
  }
`;

export const BookButtoWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 40%;
  & > :not(:first-child) {
    margin-left: 16px;
  }
  @media screen and (max-width: 480px) {
    flex-direction: column;
    align-items: normal;
    width: 100%;
    & > :not(:first-child) {
      margin-left: 0px;
      margin-top: 16px;
    }
  }
`;
