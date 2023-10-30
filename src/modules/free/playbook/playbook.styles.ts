import styled from "styled-components";

export const PlaybookWrapper = styled.div`
  max-width: 1240px;
  width: 95%;
  margin: 100px auto;
  border-radius: 24px;
  background: #f1f6fa;
  padding: 34px 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    margin-right: 100px;
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
      line-height: 20px; /* 111.111% */
    }
  }
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    div {
      margin-right: 0;
      text-align: center;
      margin-bottom: 20px;
    }
  }
  @media screen and (max-width: 520px) {
    padding: 34px;
    margin-top: 50px;
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
