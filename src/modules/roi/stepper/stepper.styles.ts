import styled, { keyframes } from "styled-components";
const bubbleAnim = keyframes`
  50% {
    transform: translateY(-10px) rotate(35.48deg);
  }
`;

const scaleAnim = keyframes`
  50% {
    transform: scale(1.2);
  }
`;

const rotateAnim = keyframes`
  0%{
    transform: rotate(0deg);
   }
100%{
    transform: rotate(360deg);
   }
`;

export const ROIStepperWrapper = styled.div`
  position: relative;
  &::after {
    content: "";
    left: 0;
    right: 0;
    height: 260px;
    top: 35px;
    position: absolute;
    background: linear-gradient(
      180deg,
      #815afc 0%,
      rgba(137, 193, 244, 0.44) 74.48%,
      rgba(255, 255, 255, 0.25) 99.48%
    );
  }
`;

export const ROIStepperContainer = styled.div`
  margin: auto;
  position: relative;
  z-index: 1;
  margin-top: 42px;
  & > p {
    color: #7c7c7c;
    font-size: 14px;
    font-weight: 400;
    max-width: 853px;
    margin: auto;
    width: 95%;
    margin-top: 24px;
    margin-bottom: 128px;
    line-height: 20px; /* 142.857% */
  }
`;

export const ROIShapeContainer = styled.div`
  position: absolute;
  width: 100%;
  pointer-events: none;
  top: 0;
  bottom: 0;
  z-index: 2;
  img {
    position: absolute;
    z-index: 2;
  }
  .shape-1 {
    transform: rotate(35.48deg);
    animation: ${bubbleAnim} 2s infinite linear;
    top: 160px;
    left: 40px;
  }
  .shape-2 {
    animation: ${scaleAnim} 1500ms infinite linear;
    top: 290px;
    right: 110px;
  }
  .shape-3 {
    animation: ${rotateAnim} 2500ms infinite linear;
    top: 600px;
    left: 50px;
  }
  .shape-4 {
    animation: ${rotateAnim} 2500ms infinite linear;
    top: 700px;
    right: -10px;
  }
`;
