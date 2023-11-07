import styled from "styled-components";

export const CalendarWrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > h1 {
    color: #1e2123;
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 16px;
  }
  & > P {
    max-width: 700px;
    width: 95%;
    margin: auto;
    color: #555;
    font-size: 16px;
    font-weight: 400;
  }
  .calendly-inline-widget {
    height: 600px !important;
    max-width: 814px;
    width: 100%;
  }
  /* @media screen and (max-width: 999px) {
    .calendly-inline-widget {
      height: 600px !important;
    }
  } */
  @media screen and (max-width: 649px) {
    .calendly-inline-widget {
      margin-top: 30px;
    }
  }
`;
