import { styled } from "styled-components";

export const FeaturesWrapper = styled.div`
  max-width: 1350px;
  width: 95%;
  margin: auto;
  padding: 70px 0;
  @media screen and (max-width: 768px) {
    padding: 0 0 56px;
  }
`;

export const FeaturesInfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 65px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 30px;
  }
`;

export const FeaturesContentWrapper = styled.div`
  .swiper-slide {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 24px;
  }
  .mySwiper {
    padding-bottom: 70px;
    .swiper-pagination-bullet {
      width: 14px;
      height: 14px;
      background-color: #8e969d;
      &.swiper-pagination-bullet-active {
        background-color: #6772e5;
      }
    }
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const FeaturesSwiper = styled.div`
  display: none;
  .swiper-slide {
    width: fit-content;
    height: auto !important;
  }
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const FeaturesDescription = styled.div`
  max-width: 612px;
  width: 100%;
  color: #1e2123;
  text-align: center;
  h2 {
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      margin-left: 20px;
    }
  }
  p {
    font-size: 18px;
    font-weight: 400;
    line-height: 28px;
  }
  @media screen and (max-width: 768px) {
    max-width: 100%;
    margin-bottom: 18px;
    svg {
      width: 40px;
      height: 40px;
    }
    h2 {
      margin: 16px 0 20px;
      font-size: 24px;
    }
    p {
      font-size: 16px;
      line-height: 24px;
    }
  }
`;

export const FeatureInfo = styled.div`
  max-width: 509px;
  width: 100%;
  padding: 18px 22px;
  border-radius: 6px;
  background: #f1f6fa;
  display: flex;
  align-items: center;
  img {
    margin-right: 40px;
    width: 125px;
    /* image-rendering: pixelated; */
    height: 125px;
  }
  p {
    color: #1e2123;
    font-size: 18px;
    font-weight: 700;
    width: calc(100% - 165px);
  }
  @media screen and (max-width: 768px) {
    max-width: 100%;
  }
`;
