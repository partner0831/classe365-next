import { keyframes, styled } from "styled-components";

const bubbleAnim = keyframes`
  50% {
    transform: translateY(-10px) rotate(26.368deg);
  }
`;

const scaleAnim = keyframes`
  50% {
    transform: scale(1.2);
  }
`;

const rotateAnim = keyframes`
  0% {
    transform: rotate(0deg) translateY(0);
  }
  50% {
    transform: rotate(180deg) translateY(-10px);
  }
  100% {
    transform: rotate(360deg) translateY(0);
  }
`;

export const LandingSectionWrapper = styled.div`
  padding: 60px 0 110px;
  width: 95%;
  margin: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    color: #1e2123;
    text-align: center;
    font-size: 48px;
    font-weight: 700;
    line-height: 60px;
    span {
      color: #9de01f;
      font-family: "Roboto Slab", serif;
    }
    b {
      display: block;
    }
  }
  p {
    color: #3b3f42;
    text-align: center;
    font-size: 20px;
    font-weight: 400;
    line-height: 30px; /* 150% */
    max-width: 715px;
    margin: auto;
    margin-top: 24px;
  }
  @media screen and (max-width: 1024px) {
    h1 {
      font-size: 40px;
    }
  }
  @media screen and (max-width: 768px) {
    padding: 22px 0 30px;
    align-items: flex-start;
    h1 {
      text-align: left;
      line-height: 40px;
      font-size: 36px;
      span {
        display: block;
      }
    }
    p {
      text-align: left;
      margin-top: 10px;
      line-height: 24px;
      font-size: 18px;
    }
  }
  @media screen and (max-width: 480px) {
    h1 {
      b {
        max-width: 282px;
      }
    }
  }
`;

export const LandingButtonWrapper = styled.div`
  display: flex;
  margin: 32px 0 40px;
  & > :not(:first-child) {
    margin-left: 16px;
  }
  @media screen and (max-width: 768px) {
    margin: 24px 0;
  }
  @media screen and (max-width: 480px) {
    flex-direction: column;
    width: 100%;
    & > :not(:first-child) {
      margin-left: 0;
      margin-top: 16px;
    }
  }
`;

export const LandingVideoWrapper = styled.div`
  background: #6772e5;
  border-radius: 12px;
  max-width: 1000px;
  margin: auto;
  width: 100%;
  height: 554px;
  position: relative;
  img {
    position: absolute;
    bottom: -20px;
    right: -20px;
    width: 48px;
    transform: translateY(0px) rotate(26.368deg);
    animation: ${bubbleAnim} 2s infinite ease-in-out;
  }
  @media screen and (max-width: 768px) {
    height: 0;
    padding-top: 60%;
    svg {
      display: none;
    }
  }
`;

export const LandingShapeWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  pointer-events: none;
  img {
    width: 48px;
    position: absolute;
    transform: translateY(10px) rotate(26.368deg);
  }
  .shape-1 {
    animation: ${bubbleAnim} 2s infinite ease-in-out;
    top: 14%;
    left: 5%;
  }
  .shape-2 {
    animation: ${bubbleAnim} 3s infinite ease-in-out;
    top: 8%;
    right: 8%;
  }
  .shape-3 {
    animation: ${scaleAnim} 2s infinite ease-in-out;
    top: 50%;
    left: 4%;
    transform-origin: 50% 50%;
  }
  .shape-4 {
    animation: ${rotateAnim} 3s linear infinite;
    top: 45%;
    right: 0;
  }
  .shape-5 {
    animation: ${bubbleAnim} 2s infinite ease-in-out;
    bottom: 2%;
    left: 50%;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
