import styled from "styled-components";

export const MeetWrapper = styled.div`

  max-width: 1240px;
  width: 95%;
  margin: auto;
  color: var(--site-heading, #1E2123);
  h1{

    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  h2, h3{
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px; /* 137.5% */
  }
  h6{
    color: var(--bright-blue, #6772E5);
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 28px; /* 116.667% */
  }
`;
export const MeetHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 124px;
  div{
    width: 294px;
  }
`;
export const SoftwareView =styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 93px; 

`;
export const SoftwareWrapper = styled.div`
  h1{
    max-width: 260px;
  }
  h2{
    max-width: 310px;
  }
  h3{
    max-width: 280px;
  }
  h2{

    margin-top: 181px !important;
  }
  img{
    width: 100%;
    margin-left: 71px;
  }
`;