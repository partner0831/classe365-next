import { styled } from "styled-components";

export const StreamlineWrapper = styled.div`
  padding: 150px 0;
  & > h1 {
    color: #1e2123;
    text-align: center;
    font-size: 36px;
    font-weight: 700;
    max-width: 780px;
    width: 95%;
    margin: auto;
  }
  & > p {
    color: #3b3f42;
    text-align: center;
    max-width: 785px;
    font-size: 18px;
    font-weight: 400;
    width: 95%;
    margin: auto;
    margin-top: 32px;
  }
  @media screen and (max-width: 768px) {
    padding: 60px 0;
    & > h1 {
      font-size: 24px;
    }
    & > p {
      margin-top: 16px;
      font-size: 14px;
    }
  }
`;

export const StreamlineStickyWrapper = styled.div``;

export const StreamlineImageWrapper = styled.div`
  margin-left: auto;
  position: sticky;
  width: 45%;
  top: 0;
  height: 100vh;
  display: flex;
  align-items: center;
  a {
    display: none;
    width: 100%;
    &.active {
      display: flex;
    }
    /* padding-top: 50px; */
    img {
      width: 100%;
      /* image-rendering: pixelated; */
    }
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const StreamlineTextWrapper = styled.div`
  max-width: 1240px;
  margin: auto;
  margin-top: -100vh;
  width: 95%;
  div {
    max-width: 395px;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center !important;
    h1 {
      color: #1e2123;
      font-size: 32px;
      font-weight: 700;
      margin-bottom: 24px;
    }
    p {
      color: #3b3f42;
      font-size: 18px;
      font-weight: 400;
      line-height: 28px; /* 155.556% */
    }
    img {
      display: none;
    }
  }
  @media screen and (max-width: 768px) {
    margin-top: 40px;
    div {
      &:not(:first-child) {
        margin-top: 16px;
      }
      max-width: 100%;
      height: auto;
      h1 {
        font-size: 24px;
        margin-bottom: 12px;
      }
      l p {
        font-size: 14px;
        line-height: 20px;
      }
      img {
        display: block;
        margin-top: 20px;
      }
    }
  }
`;
