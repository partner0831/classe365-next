import styled from "styled-components";

export const ROIWrapper = styled.div`
  border-radius: 24px;
  background: #f1f6fa;
  max-width: 1240px;
  width: 95%;
  margin: auto;
  display: flex;
  margin-top: 100px;
  align-items: center;
  padding: 40px 70px;
  justify-content: space-between;
  div {
    max-width: 520px;
    h1 {
      color: #3b3f42;
      font-size: 32px;
      font-weight: 700;
      margin-bottom: 24px;
    }
    p {
      color: #3b3f42;
      font-size: 18px;
      font-weight: 400;
      line-height: 24px; /* 133.333% */
    }
  }
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    div {
      max-width: 100%;
      text-align: center;
      margin-bottom: 24px;
    }
  }
  @media screen and (max-width: 520px) {
    margin-top: 50px;
    padding: 34px;
    div {
      h1 {
        font-size: 24px;
        margin-bottom: 12px;
      }
      p {
        font-size: 14px;
      }
    }
    img {
      width: 300px;
      height: auto;
    }
  }
`;
