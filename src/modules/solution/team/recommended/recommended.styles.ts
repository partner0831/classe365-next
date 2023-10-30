import { styled } from "styled-components";

export const RecommendedWrapper = styled.div`
  margin-top: 120px;
  padding: 100px 0;
  @media screen and (max-width: 768px) {
    margin-top: 60px;
  }
`;

export const RecommendedContainer = styled.div`
  max-width: 1190px;
  width: 95%;
  margin: auto;
  h1 {
    text-align: center;
    font-size: 36px;
    font-weight: 700;
    margin: auto;
    margin-bottom: 64px;
    max-width: 576px;
  }
  @media screen and (max-width: 768px) {
    h1 {
      font-size: 24px;
      margin-bottom: 32px;
    }
  }
`;

export const RecommendedTabWrapper = styled.div<{ tabStyle?: boolean }>`
  border-radius: ${({ tabStyle }) => (tabStyle ? "100px" : "0px")};
  background: ${({ tabStyle }) => (tabStyle ? "#FAFAFA" : "transparent")};
  padding: ${({ tabStyle }) => (tabStyle ? "11px" : "0px")};
  width: fit-content;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  & > :not(:first-child) {
    margin-left: ${({ tabStyle }) => (tabStyle ? "16px" : "64px")};
  }
  span {
    display: flex;
    position: relative;
    text-align: center;
    align-items: center;
    justify-content: center;
    color: ${({ tabStyle }) => (tabStyle ? "#3B3F42" : "#fff")};
    font-size: 24px;
    font-weight: 700;
    width: ${({ tabStyle }) => (tabStyle ? "298px" : "auto")};
    background: ${({ tabStyle }) => (tabStyle ? "#fff" : "transparent")};
    min-height: ${({ tabStyle }) => (tabStyle ? "56px" : "auto")};
    border-radius: ${({ tabStyle }) => (tabStyle ? "60px" : "0px")};
    cursor: pointer;
    &.active {
      background: ${({ tabStyle }) => (tabStyle ? "#6772E5" : "transparent")};
      color: #fff;
    }
    &::after {
      content: "";
      background-color: transparent;
      position: absolute;
      height: 5px;
      left: 0;
      bottom: -12px;
      display: ${({ tabStyle }) => (tabStyle ? "none" : "block")};
      transition: all 0.3s;
      border-radius: 999px;
      width: 100%;
    }
    &.active::after {
      background-color: #4ed163;
    }
  }
  @media screen and (max-width: 1024px) {
    span {
      width: ${({ tabStyle }) => (tabStyle ? "220px" : "auto")};
    }
  }
  @media screen and (max-width: 768px) {
    padding: ${({ tabStyle }) => (tabStyle ? "6px" : "0px")};
    & > :not(:first-child) {
      margin-left: ${({ tabStyle }) => (tabStyle ? "8px" : "32px")};
    }
    span {
      font-size: 16px;
      width: ${({ tabStyle }) => (tabStyle ? "150px" : "auto")};
      min-height: ${({ tabStyle }) => (tabStyle ? "40px" : "auto")};
      &::after {
        height: 3px;
      }
    }
  }
  @media screen and (max-width: 560px) {
    span {
      width: ${({ tabStyle }) => (tabStyle ? "100%" : "auto")};
      padding: ${({ tabStyle }) => (tabStyle ? "0 20px" : "auto")};
    }
  }
  @media screen and (max-width: 480px) {
    & > :not(:first-child) {
      margin-left: ${({ tabStyle }) => (tabStyle ? "8px" : "16px")};
    }
  }
`;

export const RecommendedTabContent = styled.div`
  padding-top: 80px;
  display: none;
  align-items: center;
  justify-content: space-between;
  &.show {
    display: flex;
  }
  @media screen and (max-width: 768px) {
    padding-top: 40px;
    flex-direction: column;
  }
`;

export const RecommededInfoWrapper = styled.div`
  max-width: 434px;
  width: 40%;
  img {
    width: 56px;
    height: 56px;
    margin-bottom: 32px;
  }
  p {
    font-size: 18px;
    font-weight: 400;
    line-height: 28px; /* 155.556% */
    margin-bottom: 24px;
  }
  a {
    display: inline-flex;
    align-items: center;
    font-size: 18px;
    font-weight: 700;
    text-decoration-line: underline;
    svg {
      margin-left: 8px;
    }
  }
  @media screen and (max-width: 768px) {
    max-width: 100%;
    width: 100%;
    margin-bottom: 20px;
    img {
      margin-bottom: 16px;
    }
    p {
      font-size: 14px;
      line-height: 20px;
      margin-bottom: 12px;
    }
    a {
      font-size: 14px;
    }
  }
`;

export const RecommendedImageWrapper = styled.div`
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
