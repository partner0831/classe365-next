import { styled } from "styled-components";

export const EnjoySectionWrapper = styled.div`
  max-width: 1240px;
  width: 95%;
  margin: auto;
  padding: 120px 0;
  & > h1 {
    color: #1e2123;
    text-align: center;
    font-size: 36px;
    font-weight: 700;
    max-width: 675px;
    margin: auto;
    margin-bottom: 32px;
  }
  & > p {
    color: #3b3f42;
    text-align: center;
    font-size: 18px;
    font-weight: 400;
    max-width: 786px;
    margin: auto;
  }
  @media screen and (max-width: 768px) {
    padding: 60px 0;
    h1 {
      font-size: 24px;
      margin-bottom: 16px;
    }
    p {
      font-size: 14px;
    }
  }
`;

export const EnjoyGridWrapper = styled.div`
  display: grid;
  margin-top: 80px;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 80px 64px;
  @media screen and (max-width: 1024px) {
    grid-gap: 40px 32px;
  }
  @media screen and (max-width: 560px) {
    margin-top: 40px;
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 420px) {
    grid-gap: 20px;
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const GridItemWrapper = styled.div`
  img {
    height: 92px;
    width: auto;
    margin-bottom: 24px;
  }
  h4 {
    color: #1e2123;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 18px;
  }
  p {
    color: #3b3f42;
    font-size: 16px;
    font-weight: 400;
    line-height: 28px; /* 175% */
  }

  @media screen and (max-width: 768px) {
    img {
      height: 70px;
      margin-bottom: 12px;
    }
    h4 {
      font-size: 16px;
      margin-bottom: 10px;
    }
    p {
      font-size: 12px;
      line-height: 20px;
    }
  }
`;
