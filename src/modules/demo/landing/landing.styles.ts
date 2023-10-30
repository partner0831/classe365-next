import styled from "styled-components";

export const LandingWrapper = styled.div`
  padding: 100px 0 50px;
  background-color: #6772e5;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  & > * {
    position: relative;
    z-index: 2;
  }
  /* &::after {
    z-index: 1;
    content: "";
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0;
    height: 70%;
    background: url("/assets/images/demo-landing.png") no-repeat;
    background-size: cover;
    background-position: center;
  } */
`;

export const LandingWaveAnim = styled.div`
  height: 5%;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  background: #7c79ff;

  .wave {
    background: url("/assets/images/wave.svg") repeat-x;
    position: absolute;
    top: -198px;
    width: 6400px;
    height: 198px;
    animation: wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
    transform: translate3d(0, 0, 0);
  }

  .wave:nth-of-type(2) {
    top: -175px;
    animation: wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) -0.125s infinite,
      swell 7s ease -1.25s infinite;
    opacity: 1;
  }

  @keyframes wave {
    0% {
      margin-left: 0;
    }
    100% {
      margin-left: -1600px;
    }
  }
  @keyframes swell {
    0%,
    100% {
      transform: translate3d(0, -25px, 0);
    }
    50% {
      transform: translate3d(0, 5px, 0);
    }
  }
`;

export const LandingLogo = styled.div`
  margin-bottom: 34px;
  cursor: pointer;
`;

export const TitleWrapper = styled.div`
  color: #fff;
  text-align: center;
  h1 {
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 20px;
  }
  p {
    max-width: 700px;
    width: 95%;
    margin: auto;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px; /* 125% */
    margin-bottom: 40px;
  }
  @media screen and (max-width: 768px) {
    h1 {
      font-size: 24px;
      margin-bottom: 12px;
    }
    p {
      font-size: 14px;
      margin-bottom: 20px;
    }
  }
`;

export const LandingGrid = styled.div`
  display: flex;
  max-width: 920px;
  width: 95%;
  margin: auto;
  & > :not(:first-child) {
    margin-left: 32px;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    & > :not(:first-child) {
      margin-left: 0;
      margin-top: 20px;
    }
  }
`;

export const LandingGridItem = styled.div`
  border-radius: 24px;
  width: 100%;
  border: 1px solid #fff;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0px 4px 4px 0px rgba(39, 37, 136, 0.25);
  backdrop-filter: blur(10px);
  padding: 40px;
  text-align: center;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h5,
  p,
  h3,
  h4 {
    font-size: 16px;
    font-weight: 400;
    line-height: 20px; /* 125% */
  }
  h5 {
    margin-bottom: 45px;
  }
  h1 {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 12px;
  }
  h3 {
    margin-top: 50px;
    font-weight: 700;
  }
  h4 {
    margin-top: 10px;
    font-weight: 700;
  }
  button {
    margin: auto;
    margin-top: 40px;
    outline: none;
    border: none;
    background-color: #fff;
    color: #6772e5;
    border-radius: 9999px;
    padding: 16px 32px;
    font-size: 16px;
    font-weight: 600;
    span {
      margin-right: 10px;
    }
    display: flex;
    align-items: center;
  }
  @media screen and (max-width: 425px) {
    padding: 20px;
  }
`;
