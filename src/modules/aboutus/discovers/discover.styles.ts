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
`