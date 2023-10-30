import { styled } from "styled-components";

export const SolutionsWrapper = styled.div`
  background: #f9f9ff;
  padding: 90px 0;
  @media screen and (max-width: 768px) {
    background-color: #fff;
    padding: 16px 0 56px;
  }
`;

export const SolutionTitleWrapper = styled.div`
  max-width: 648px;
  width: 95%;
  margin: auto;
  text-align: center;
  margin-bottom: 80px;
  h5 {
    color: #6772e5;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 20px;
  }
  h1 {
    color: #1e2123;
    font-family: Inter;
    font-size: 36px;
    font-weight: 700;
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 30px;
    h5 {
      font-size: 18px;
      margin-bottom: 8px;
    }
    h1 {
      font-size: 24px;
    }
  }
`;

export const SolutionContainer = styled.div`
  max-width: 1240px;
  width: 95%;
  margin: auto;
  position: absolute;
  height: 100%;
  .list {
    max-width: 476px;
    width: 40%;
    margin-left: auto;
    position: sticky;
    top: 50px;
  }
  .image-wrapper {
    display: none;
  }
  /* @media screen and (max-width: 1280px) {
    position: relative;
    display: flex;
    .image-wrapper {
      display: block;
      width: 55%;
      img {
        width: 100%;
        display: block;
        height: auto;
      }
    }
    .list {
      height: fit-content;
    }
  } */
  @media screen and (max-width: 768px) {
    position: static;
    .image-wrapper {
      display: none;
    }
    .list {
      max-width: 100%;
      width: 100%;
    }
  }
`;

export const SolutionCardWrapper = styled.div`
  &:not(:last-child) {
    margin-bottom: 34px;
  }
  display: block;
  padding: 0 24px 16px 24px;
  text-decoration: none;
  border-bottom: 1px solid #f0f0f0;
  transition: all 0.3s;
  cursor: pointer;
  &.active {
    padding: 24px;
    margin-bottom: 24px;
    border-bottom: none;
    border-radius: 12px;
    background: #fff;
    box-shadow: 0px 2px 20px 0px #e1e1e1;
  }
  &.active > div {
    padding-top: 16px;
    height: fit-content;
    opacity: 1;
  }
  h3 {
    color: #1e2123;
    font-size: 20px;
    font-weight: 500;
  }
  & > div {
    color: #3b3f42;
    font-size: 18px;
    overflow: hidden;
    transition: all 0.3s;
    opacity: 0;
    height: 0;
    padding-top: 0;
    font-weight: 400;
    line-height: 24px; /* 133.333% */
    div {
      display: none;
    }
    h4 {
      margin-top: 8px;
      font-size: 14px;
      color: #6772e5;
      display: flex;
      align-items: center;
      svg {
        margin-left: 8px;
        transition: all 0.3s;
      }
      &:hover {
        svg {
          transform: translateX(5px);
        }
      }
    }
  }
  @media screen and (max-width: 1024px) {
    h3 {
      font-size: 18px;
    }
    & > div {
      font-size: 16px;
    }
  }
  @media screen and (max-width: 768px) {
    padding: 24px;
    border-bottom: none;
    border-radius: 12px;
    box-shadow: 0px 2px 10px 0px rgba(175, 175, 175, 0.25);
    &:not(:last-child) {
      margin-bottom: 24px;
    }
    & > div {
      div {
        display: block;
        width: 100%;
        /* padding-top: 60%; */
        margin-top: 10px;
        position: relative;
        /* background: #d9d9d9; */
        img {
          width: 100%;
        }
      }
    }
  }
`;

export const SolutionContentWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

export const SolutionImageWrapper = styled.div<{ bg: string }>`
  width: 100%;
  pointer-events: none;

  div {
    padding-left: 100px;
    display: flex;
    transition: all 0.3s;
    width: calc(60% - 40px);
    img {
      width: 814px;

      max-width: 100%;
      height: auto;
    }
  }
`;

export const SolutionImageGroup = styled.div`
  width: 100%;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
