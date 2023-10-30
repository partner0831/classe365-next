import { styled } from "styled-components";

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 12px;
  & > :nth-child(odd) {
    & > div:first-child {
      background: #a389f4;
    }
    & > div:last-child {
      background: #fafafa;
    }
  }
  & > :nth-child(even) {
    & > div:first-child {
      background: #6772e5;
    }
    & > div:last-child {
      background: #f1f6fa;
    }
  }
  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

export const GridItemWrapper = styled.div`
  & > div:first-child {
    /* height: 436px; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    img {
      width: 100%;
      height: auto;
    }
  }

  & > div:last-child {
    padding: 24px 30px;
    align-items: center;
    display: flex;
    p {
      margin-right: 16px;
      color: #000;
      font-size: 14px;
      font-weight: 400;
      line-height: 22px; /* 157.143% */
      height: 66px;
      overflow: hidden;
      text-overflow: ellipsis;
      &.active {
        height: 100%;
      }
    }
    div {
      cursor: pointer;
    }
  }
  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);

    &:first-child > div > div,
    &:last-child > div > div {
      justify-content: center;
    }
  }
`;
