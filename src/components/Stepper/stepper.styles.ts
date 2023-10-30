import styled from "styled-components";

export const StepperWrapper = styled.div`
  max-width: 853px;
  margin: auto;
  width: 95%;
  z-index: 1;
  position: relative;
  .stepper-wrapper {
    padding: 0;
  }
  .stepper-item {
    &.active,
    &.completed {
      background: #6772e5 !important;
      span {
        color: #fff;
      }
    }
    filter: drop-shadow(
      0px 2.997894763946533px 7.494736671447754px rgba(73, 81, 166, 0.25)
    );
    background: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(7.494736671447754px);
    span {
      color: #6772e5;
      font-size: 27px;
      font-weight: 700;
    }
    width: 64px;
    height: 64px;
  }
  #RFS-ConnectorContainer {
    top: calc((64px - 3px) / 2);
    left: calc(-50% + 40px);
    right: calc(50% + 40px);
    position: absolute;
    span {
      border-width: 3px;
    }
  }
  #RFS-LabelContainer {
    span {
      color: #fff;
      text-align: center;
      font-size: 16px;
      font-weight: 700;
      line-height: 20px;
    }
  }
  @media screen and (max-width: 768px) {
    .stepper-item {
      width: 50px;
      height: 50px;
      span {
        font-size: 20px;
      }
    }
    #RFS-ConnectorContainer {
      top: calc((50px - 3px) / 2);
      left: calc(-50% + 30px);
      right: calc(50% + 30px);
      position: absolute;
      span {
        border-width: 3px;
      }
    }
    #RFS-LabelContainer {
      span {
        font-size: 12px;
      }
    }
  }
`;
