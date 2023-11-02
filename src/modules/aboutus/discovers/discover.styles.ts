import styled from "styled-components";

export const DiscoverWrapper = styled.div`
    max-width: 1240px;
    width: 95%;
    margin: 124px auto auto auto;
    h1{
        color: var(--site-heading, #1E2123);
        text-align: center;
        font-size: 36px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
`;
export const PlanView = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 107px;
    h2{
      color: var(--bright-blue, #6772E5);
      font-size: 32px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
    h3{
      color: var(--text-grey-dark, #3B3F42);
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      line-height: 32px; /* 133.333% */
      margin-top: 12px;
      max-width: 437px;
    }
    @media screen and (max-width: 1024px) {
      flex-direction: column;
    }
`;
export const PlanCard = styled.div`
  width: 54%;
  margin-left: 43px;
  position: relative;
  @media screen and (max-width: 1024px) {
        margin-left: 0px;
        width: 100%;
    }

`
export const Line = styled.div`
    width: 1px;
    background: #6772E5;
    position: absolute;
    height: 100%;
    left: 14px;
`
export const PlanContainer = styled.div`
  display: flex;
  padding: 28px 0;

  .year-plan{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: fit-content;
  }
  span{
    margin-left: 38px;
    color: var(--text-grey-dark, #3B3F42);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px; /* 137.5% */
  }
`
export const YearContent = styled.div`
      color: var(--text-grey-dark, #3B3F42);
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      position: absolute;
      top: -20px;
`
export const YearView = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  
`
export const Rectangle = styled.div`
    width: 28px;
    height: 28px;
    border-radius: 4px;
    border: 2px solid var(--white, #FFF);
    background: var(--bright-blue, #6772E5);
`
export const DotStick = styled.hr`
  border: none;
  border-top: 1px dotted #6772E5;
  background-color: #fff;
  height: 1px;
  width: 152px;
`
export const LandingCountWrapper= styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  margin-top: 90px;
  padding: 80px 0;
  p{
    color: var(--text-grey-dark, #3B3F42);
    text-align: center;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    max-width: 894px;
    z-index: 2;
  }

  span{
        margin-top: 16px;
        color: var(--text-grey-dark, #3B3F42);
        text-align: center;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 22px; /* 137.5% */
        max-width: 898px;
        z-index: 2;
    }
  
  &::after {
    content: "";
    position: absolute;
    left: -30px;
    right: -30px;
    bottom: 45px;
    top: -68px;
    border-radius: 30px;
    background: linear-gradient(180deg, #A389F4, #89F4CD00 100%);
  }
  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    border-radius: 30px;
    background: rgba(255, 255, 255, 0.4);
    /* image elevations 1 */
    box-shadow: 0px 4px 20px 0px rgba(84, 84, 84, 0.25);
    z-index: 1;
  }
  @media screen and (max-width:1024px) {
    p,span{
      max-width: 768px;
    }
  }
  @media screen and (max-width:768px) {
    p,span{
      max-width: 525px;
    }
    p{
      font-size: 28px !important;
    }

  }
  @media screen and (max-width:425px) {
    p,span{
      max-width: 260px;
    }
    p{
      font-size: 20px;
    }
  }
`