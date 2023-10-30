import { styled } from "styled-components";

export const ImproveSectionWrapper = styled.div`
  max-width: 1240px;
  width: 95%;
  margin: auto;
  h1 {
    max-width: 434px;
    width: 100%;
    color: #1e2123;
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 48px;
  }
  @media screen and (max-width: 768px) {
    h1 {
      font-size: 24px;
      margin-bottom: 24px;
    }
  }
`;

export const ImproveContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ImproveListWrapper = styled.div`
  height: fit-content;
  position: sticky;
  top: 50px;
  max-width: 458px;
  width: 40%;
  @media screen and (max-width: 768px) {
    max-width: 100%;
    width: 100%;
  }
`;

export const ImproveImageWrapper = styled.div`
  max-width: 636px;
  width: 100%;
  margin-left: 40px;
  div {
    /* &:not(:last-child) { */
    /* padding-top: 50px; */
    transition: all 0.3s;
    display: flex;
    image-rendering: pixelated;
    background-size: 100% 100%;
    height: fit-content;
    /* } */
    width: 100%;
    img {
      width: 100%;
      opacity: 0;
    }
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const ImproveListItem = styled.a`
  border-top: 1px solid #f0f0f0;
  display: block;
  padding: 24px 0;
  text-decoration: none;

  h3 {
    color: #3b3f42;
    font-size: 18px;
    font-weight: 700;
  }
  p {
    color: #555;
    font-size: 16px;
    font-weight: 400;
    line-height: 28px; /* 175% */
    height: 0;
    opacity: 0;
    padding-top: 0;
    transition: all 0.3s;
    contain: content;
  }
  div {
    display: none;
  }
  &.active {
    border-top: 1px solid #6772e5;
    p {
      height: fit-content;
      opacity: 1;
      padding-top: 18px;
    }
  }
  @media screen and (max-width: 768px) {
    div {
      display: block;
      padding-top: 0;
      height: 0;
      transition: all 0.3s;
      opacity: 0;
      img {
        width: 100%;
      }
    }
    &.active {
      div {
        padding-top: 20px;
        height: fit-content;
        opacity: 1;
      }
    }
  }
`;
