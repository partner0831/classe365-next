import styled from "styled-components";

export const GreateWrapper = styled.div`

  max-width: 1240px;
  width: 95%;
  margin: auto;
  color: var(--site-heading, #1E2123);
  font-style: normal;
  h1{
    font-size: 32px;
    font-weight: 700;
    line-height: normal;
  }
  h4{
    color: var(--text-grey-dark, #3B3F42);
    font-size: 18px;
    font-weight: 700;
    line-height: 22px; /* 122.222% */
  }
  h2, h3{
    font-size: 16px;
    font-weight: 400;
    line-height: 22px; /* 137.5% */
  }
  h6{
    color: var(--bright-blue, #6772E5);
    font-size: 24px;
    font-weight: 600;
    line-height: 28px; /* 116.667% */
  }
  @media screen and (max-width: 768px) {
    h1{
      font-size: 24px;
    }
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
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
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
  @media screen and (max-width: 768px) {
    h1, h3, h4{
      max-width: 100%;
    }
    svg {
      margin-top: 20px;
    }
    margin-bottom: 30px;
  }
`;
export const SoftwareImageWrapper = styled.div`
  position: relative;
  width: 100%;
    border-radius: 12px;
    contain: content;
  max-width: 847px;
 margin-left: 64px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
  div {
      position: absolute;
      width: 100%;
      height: 100%;
      padding: 28px 48px;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      top: 0;
      left: 0;
      background: linear-gradient(180deg, rgba(255, 255, 255, 0.34) 0%, rgba(255, 255, 255, 0.80) 63.79%);
      backdrop-filter: blur(2px);
    p {
        color: #1E2123;
        font-size: 16px;
        font-weight: 600;
        line-height: 22px; /* 137.5% */
      }
  }
@media screen and (max-width: 768px) {
  margin-left: 0;

}
@media screen and (max-width: 500px) {
  /* padding: 28px; */
  div {
    padding: 28px;

    position: relative;
  }
  img {
    position: absolute;
  }
}
@media screen and (max-width: 375px) {
  div {
      p {
        font-size: 14px;
      }
    }
}
`