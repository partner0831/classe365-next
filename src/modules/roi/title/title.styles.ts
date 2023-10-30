import styled from "styled-components";

export const ROITitleWrapper = styled.div`
  padding: 70px 0;
  max-width: 792px;
  margin: auto;
  width: 95%;
  text-align: center;
  h1 {
    color: #1e2123;
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 18px;
  }
  p {
    color: #3b3f42;
    font-size: 18px;
    font-weight: 400;
    line-height: 24px; /* 133.333% */
  }
  @media screen and (max-width: 768px) {
    padding: 40px 0;
    h1 {
      font-size: 28px;
      margin-bottom: 12px;
    }
    p {
      font-size: 14px;
      line-height: 20px;
    }
  }
`;
