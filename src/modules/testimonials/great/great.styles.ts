import styled from "styled-components";

export const GreateWrapper = styled.div`

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
  h4{
    color: var(--text-grey-dark, #3B3F42);
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 22px; /* 122.222% */
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
  margin-top: 60px; 

`;
export const SoftwareWrapper = styled.div`
  h1{
    max-width: 320px;
  }
  h4{
    margin-top: 24px;
  }
  h3{
    max-width: 320px;
  }
  img{
    width: 100%;
    margin-left: 71px;
  }
  svg{
    margin-top: 173px;
  }

`;