import { styled } from "styled-components";

export const DiscoverWrapper = styled.div`
  padding: 120px 0 100px;
  width: 100%;
  display: flex;
  position: relative;
  justify-content: center;
  @media screen and (max-width: 1024px) {
    padding: 50px 0 56px;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const DiscoverContainer = styled.div`
  max-width: 1240px;
  position: absolute;
  width: 95%;
  margin: auto;
  & > div {
    width: 45%;
    padding-left: 100px;
    margin-left: auto;
  }
  h2 {
    margin: 40px 0 24px;
    color: #1e2123;
    font-size: 36px;
    font-weight: 700;
    max-width: 395px;
  }
  p {
    color: #1e2123;
    font-size: 18px;
    font-weight: 400;
    line-height: 28px; /* 155.556% */
  }
  @media screen and (max-width: 1024px) {
    h2 {
      font-size: 24px;
      margin: 20px 0;
    }
    p {
      font-size: 16px;
      line-height: 24px;
    }
    & > div {
      width: 50%;
    }
  }
  @media screen and (max-width: 768px) {
    position: relative;
    & > div {
      padding-left: 0;
      width: 100%;
    }
    p {
      margin-bottom: 32px;
    }
  }
`;

export const CustomNavigator = styled.div`
  position: relative;
  display: flex;
  margin-top: 48px;
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #6772e5;
    font-size: 20px;
    cursor: pointer;
    width: 46px;
    height: 46px;
    border: 1px solid #6772e5;
    border-radius: 9999px;
    &:not(:first-child) {
      margin-left: 12px;
    }
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const DiscoverSliderWrapper = styled.div<{ bg?: string }>`
  width: 100%;
  & > div {
    width: 55%;
  }
  .swiper {
    padding: 20px;
  }
  .swiper-slide {
    max-width: 402px;
    width: 100%;
    height: 100%;
  }
  .swiper-slide .discover-card {
    border-radius: 12px;
    transition: all 0.3s;
    background: #fafafa;
  }
  .swiper-slide-active .discover-card {
    background: ${({ bg }) => (bg ? "#fafafa" : "#f1f6fa")};
    box-shadow: 0px 4px 20px 0px rgba(84, 84, 84, 0.25);
  }
  .swiper-pagination-bullet {
    width: 12px;
    height: 12px;
  }
  .swiper-pagination-bullet.swiper-pagination-bullet-active {
    background-color: #6772e5;
  }
  .swiper-pagination {
    display: none;
  }
  @media screen and (max-width: 768px) {
    & > div {
      width: 95%;
      margin: auto;
    }
    .swiper {
      padding-bottom: 50px;
    }
    .swiper-pagination {
      display: block;
    }
  }
`;
