import { styled } from "styled-components";

export const ToolkitWrapper = styled.div`
  padding: 120px 0 0;
  @media screen and (max-width: 768px) {
    padding: 60px 0 0;
  }
`;

export const ToolkitTitleWrapper = styled.div`
  max-width: 1050px;
  width: 95%;
  margin: auto;
  padding-bottom: 48px;
  h1 {
    margin-bottom: 32px;
    color: #1e2123;
    text-align: center;
    font-size: 36px;
    font-weight: 700;
  }
  p {
    color: #3b3f42;
    text-align: center;
    font-size: 18px;
    font-weight: 400;
  }
  @media screen and (max-width: 768px) {
    padding-bottom: 24px;
    h1 {
      font-size: 24px;
      margin-bottom: 16px;
    }
    p {
      font-size: 14px;
    }
  }
`;

export const ToolkitImageWrapper = styled.div`
  /* overflow-x: hidden; */
  margin: 30px 0;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 1050px;
    width: 95%;
    margin: auto;
    position: relative;
  }
  img {
    max-width: 753px;
    width: 100%;
    height: auto;
    position: relative;
    z-index: 2;
  }
  svg {
    z-index: 1;
    position: absolute;
    &.shape-1 {
      bottom: 0;
      left: 0;
    }
    &.shape-2 {
      top: 80px;
      left: -170px;
    }
    &.shape-3 {
      right: -42px;
      bottom: 14px;
    }
    &.shape-4 {
      top: -14px;
      right: 14px;
    }
    &.shape-5 {
      right: -76px;
      top: 140px;
      transform: rotate(45deg);
    }
    &.shape-6 {
      left: 0;
      top: 190px;
    }
  }
  @media screen and (max-width: 768px) {
    svg {
      display: none;
    }
  }
`;
