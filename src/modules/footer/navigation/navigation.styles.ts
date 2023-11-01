import { styled } from "styled-components";

export const NavigationWrapper = styled.div`
  background: #393c59;
  color: #fff;
`;

export const NavigationContainer = styled.div`
  max-width: 1240px;
  width: 95%;
  margin: auto;
  padding-top: 70px;
`;

export const FooterLogo = styled.img`
  margin-bottom: 56px;
`;

export const NavigationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding-bottom: 70px;
  gap: 49px;
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const NavigationListWrapper = styled.div`
  & > :not(:first-child) {
    margin-top: 64px;
  }
`;

export const NavigationListContent = styled.div`
  color: #fff;
  h2 {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 24px;
  }
  a {
    display: block;
    text-decoration: none;
    color: #f1f6fa;
    font-size: 16px;
    font-weight: 400;
    &:not(:first-child) {
      margin-bottom: 18px;
    }
  }
`;

export const DownloadButtonWrapper = styled.div`
  display: flex;
  a {
    &:not(:first-child) {
      margin-left: 12px;
    }
  }

`;

export const CopyrightWrapper = styled.div`
  border-top: 1px solid #5b5e81;
  padding-top: 24px;
  padding-bottom: 46px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > p {
    color: #f1f6fa;
    font-size: 14px;
    font-weight: 400;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    & > p {
      margin-top: 19px;
    }
  }
  @media screen and (max-width: 480px) {
    align-items: flex-start;
  }
`;

export const SocialsNavWrapper = styled.div`
  display: flex;
  align-items: center;
  div {
    display: flex;
    margin-right: 10px;
  }
  a {
    color: #f1f6fa;
    text-decoration: none;
    display: block;
    font-size: 14px;
    &.social-link {
      width: 34px;
      font-size: 16px;
      height: 34px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #292c45;
      color: #b9bdc3;
      border-radius: 9999px;
    }
    &:not(:first-child) {
      margin-left: 10px;
    }
  }
  @media screen and (max-width: 480px) {
    flex-direction: column-reverse;
    align-items: flex-start;
    & > div:last-child {
      margin-bottom: 16px;
    }
  }
`;
