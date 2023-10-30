import { styled } from "styled-components";

export const FeaturesWrapper = styled.div`
  padding: 120px 0 0;
  max-width: 1240px;
  width: 95%;
  margin: auto;
  @media screen and (max-width: 768px) {
    padding: 60px 0 0;
  }
`;

export const FeatureTitleWrapper = styled.div`
  h5 {
    color: #6772e5;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 24px;
  }
  div {
    display: flex;
    justify-content: space-between;
    h1 {
      color: #1e2123;
      font-size: 36px;
      font-weight: 700;
      width: 50%;
    }
    p {
      width: 50%;
      padding-left: 24px;
      color: #555;
      font-size: 18px;
      font-weight: 400;
      line-height: 28px; /* 155.556% */
    }
  }
  @media screen and (max-width: 768px) {
    h5 {
      font-size: 16px;
      margin-bottom: 12px;
    }
    div {
      flex-direction: column;
      h1 {
        width: 100%;
        margin-bottom: 16px;
        font-size: 24px;
      }
      p {
        width: 100%;
        padding-left: 0;
        font-size: 14px;
        line-height: 20px;
      }
    }
  }
`;

export const FeatureContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 100px;
  @media screen and (max-width: 768px) {
    margin-top: 50px;
  }
`;

export const FeatureListWrapper = styled.div`
  max-width: 574px;
  width: 50%;
  height: fit-content;
  /* position: sticky; */
  /* top: 50px; */
  @media screen and (max-width: 768px) {
    position: relative;
    width: 100%;
    max-width: 100%;
    top: 0px;
  }
`;

export const FeatureImageWrapper = styled.div`
  max-width: 628px;
  width: 50%;
  margin-left: 40px;
  position: sticky;
  top: 50px;
  height: fit-content;
  a {
    display: none;
    &.active {
      display: flex;
    }
    /* padding-top: 50px; */
    img {
      width: 100%;
    }
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const FeatureListIteam = styled.div`
  text-decoration: none;
  display: block;
  /* border-left: 3px solid #fafafa; */
  padding: 200px 0;
  /* padding-left: 20px; */
  /* min-height: 100vh; */
  div {
    display: none;
  }
  h3 {
    color: #3b3f42;
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 24px;
    position: relative;
  }
  /* h3::before {
    transition: all 0.3s;
    content: "";
    width: 3px;
    height: 100%;
    background: transparent;
    position: absolute;
    top: 0;
    left: -23px;
  } */
  p {
    color: #555;
    font-size: 16px;
    font-weight: 400;
    line-height: 28px; /* 175% */
  }
  span {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    p {
      display: flex;
      align-items: flex-start;
      margin-bottom: 5px;
      color: #7f7f7f;
      font-size: 14px;
      svg {
        min-width: 20px;
        height: 20px;
        margin-right: 10px;
        margin-top: 5px;
      }
    }
  }
  &.active {
    h3::before {
      background: #6772e5;
    }
  }
  &:not(:first-child) {
    padding-top: 48px;
  }
  @media screen and (max-width: 768px) {
    div {
      display: block;
      img {
        width: 100%;
      }
    }
    h3 {
      font-size: 18px;
      margin-bottom: 12px;
      &::before {
        background: #6772e5;
      }
    }
    p {
      font-size: 14px;
      line-height: 20px;
      margin-bottom: 6px;
    }
    &:not(:first-child) {
      padding-top: 24px;
    }
  }
`;
