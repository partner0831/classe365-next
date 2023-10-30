import { styled } from "styled-components";

export const InstitutionsWrapper = styled.div`
  background: #6772e5;
  padding: 90px 0;
  display: flex;
  justify-content: center;
  position: relative;
  align-items: center;
  @media screen and (max-width: 1024px) {
    padding: 60px 0;
    flex-direction: column;
  }
`;

export const InstitutionContainer = styled.div`
  max-width: 1240px;
  width: 95%;
  margin: auto;
  position: absolute;
  & > div {
    max-width: 545px;
    width: 100%;
  }
  h6 {
    color: #fff;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 20px;
  }
  h1 {
    color: #fff;
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 72px;
    max-width: 430px;
  }
  @media screen and (max-width: 1200px) {
    h6 {
      font-size: 18px;
      margin-bottom: 8px;
    }
    h1 {
      font-size: 24px;
      margin-bottom: 30px;
    }
  }
  @media screen and (max-width: 1024px) {
    position: relative;
    text-align: center;
    margin: auto;
    h1,
    & > div {
      margin: auto;
    }
  }
`;

export const InstitutionImageWrapper = styled.div<{ bg: string }>`
  max-width: calc(100% - 580px);
  width: 55%;
  margin-left: auto;
  background: url(${({ bg }) => bg}) no-repeat;
  background-size: 100% 100%;
  /* image-rendering: pixelated; */
  transition: all 0.3s;
  img {
    opacity: 0;
    width: 100%;
  }
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const InstitutionListWrapper = styled.div`
  & > :not(:first-child) {
    margin-top: 24px;
  }
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const InstitutionItemWrapper = styled.div`
  &.active {
    div {
      color: #1e2123;
      box-shadow: 0px 4px 20px 0px rgba(84, 84, 84, 0.25);
      background: #fff;
    }
    p {
      height: fit-content;
      opacity: 1;
      padding: 20px 0 16px;
    }
  }
  div {
    cursor: pointer;
    width: fit-content;
    padding: 16px 64px;
    font-size: 20px;
    font-weight: 500;
    border-radius: 37px;
    white-space: nowrap;
    border: 1px solid #fff;
    background: transparent;
    transition: all 0.3s;
    color: #fff;
  }
  p {
    height: 0;
    overflow: hidden;
    opacity: 0;
    color: #fff;
    transition: all 0.3s;
    font-size: 18px;
    font-weight: 500;
  }
`;

export const InsititutionSwiper = styled.div`
  display: none;
  @media screen and (max-width: 1024px) {
    display: block;
    width: 95%;
    margin: auto;
    margin-top: 38px;
    .swiper-slide {
      max-width: 329px;
      width: 100%;
    }
    .swiper {
      padding-bottom: 50px;
    }
    .swiper-slide {
      height: auto;
    }
    .swiper-pagination-bullet {
      width: 12px;
      height: 12px;
    }
    .swiper-pagination-bullet.swiper-pagination-bullet-active {
      background-color: #fff;
    }
  }
`;

export const InstitutionSwiperItemWrapper = styled.div`
  padding: 32px 12px;
  border-radius: 12px;
  border: 1px solid #fff;
  height: 100%;
  h3 {
    height: 56px;
    min-width: 197px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    background-color: #fff;
    text-align: center;
    border-radius: 9999px;
    box-shadow: 0px 4px 20px 0px rgba(84, 84, 84, 0.25);
    width: fit-content;
    color: #1e2123;
    font-size: 18px;
    font-weight: 500;
    margin: auto;
    margin-bottom: 24px;
  }
  p {
    color: #fff;
    text-align: center;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px; /* 150% */
    padding-bottom: 16px;
  }
  .image-wrapper {
    /* background: #d9d9d9; */
    position: relative;
    margin-bottom: 24px;
    img {
      width: 100%;
    }
  }
  .info-wrapper {
    display: flex;
    border-radius: 10px;
    background: #5a64cb;
    box-shadow: 0px 4px 4px 0px rgba(97, 61, 27, 0.25) inset;
    padding: 20px 14px;
    color: #fff;
    align-items: center;
    h1 {
      color: #fff;
      text-align: center;
      margin-right: 14px;
      font-size: 24px;
      font-weight: 700;
    }
    span {
      color: #fff;
      font-size: 14px;
      font-weight: 500;
    }
  }
`;
