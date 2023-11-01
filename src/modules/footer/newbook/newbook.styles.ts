import styled from "styled-components";

export const NewBookWrapper = styled.div`
  background: #393c59;
  & > img {
    position: absolute;
    &.shape-1 {
      top: 190px;
      left: -90px;
      width: 156px;
      transform: rotate(-19.51deg);
    }
    &.shape-2 {
      width: 128px;
      transform: rotate(-22.105deg);
      left: 50%;
      top: -40px;
    }
    &.shape-3 {
      width: 240px;
      right: 74px;
      top: 70px;
    }
    &.shape-4 {
      width: 274px;
      transform: rotate(24.488deg);
      right: -70px;
      top: 140px;
    }
  }
  @media screen and (max-width: 1024px) {
    & > img {
      display: none;
    }
  }
`;

export const NewBookSectionWrapper = styled.div`
  padding: 120px 0 50px;
  z-index: 1;
  position: relative;
  display: flex;
  align-items: center;
  @media screen and (max-width: 1024px) {
    padding: 70px 0 0;
    flex-direction: column;
  }
`;

export const NewBookContainer = styled.div`
  max-width: 1240px;
  margin: auto;
  width: 95%;
`;

export const NewBookTextWrapper = styled.div`
  max-width: 490px;
  width: 40%;
  h3 {
    color: #fff;
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 38px;
    line-height: 48px; /* 150% */
  }
  & > div {
    display: flex;
    & > :not(:first-child) {
      margin-left: 16px;
    }
  }
  @media screen and (max-width: 1024px) {
    width: 100%;
    max-width: 700px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    text-align: center;
  }
  @media screen and (max-width: 768px) {
    h3 {
      font-size: 24px;
      line-height: 30px;
    }
  }
  @media screen and (max-width: 425px) {
    & > div {
      flex-direction: column;
      width: 100%;
      & > :not(:first-child) {
        margin-left: 0;
        margin-top: 16px;
      }
    }
  }
`;

export const NewBookImageWrapper = styled.div`
  position: absolute;
  width: 60%;
  max-width: 840px;
  right: -87px;
  border-radius: 120px;
  background: rgba(255, 255, 255, 0.4);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(10px);
  padding: 21px 0 21px 25px;
  .marquee {
    position: relative;
    width: 100%;
    /* max-width: 100%; */
    height: 136px;
    display: flex;
    align-items: center;
    overflow-x: hidden;
  }
  img{
    margin: 0 40px;
  }
  
  & > div {
    background-color: #fff;
    /* display: flex;
    align-items: center; */
    border-radius: 999px;
    img:not(:first-child) {
      margin-left: 80px;
    }
  }

  @media screen and (max-width: 1024px) {
    position: relative;
    padding: 21px 25px;
    margin: auto;
    max-width: 95%;
    width: 100%;
    right: auto;
    margin-top: 40px;
    .marquee {
      height: 96px;
    }
  }
`;
