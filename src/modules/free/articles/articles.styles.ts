import styled from "styled-components";

export const HelpArticlesWrapper = styled.div`
  max-width: 1240px;
  width: 95%;
  margin: auto;
  margin-top: 100px;
  h1 {
    margin-bottom: 34px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
      color: #3b3f42;
      font-size: 32px;
      font-weight: 700;
    }
    span {
      color: #6772e5;
      font-size: 16px;
      font-weight: 400;
      cursor: pointer;
    }
  }
  @media screen and (max-width: 768px) {
    margin-top: 50px;
    h1 {
      margin-bottom: 24px;
      p {
        font-size: 24px;
      }
      span {
        font-size: 12px;
      }
    }
  }
`;

export const HelpArticlesGridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 32px;
  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 460px) {
    grid-template-columns: 1fr;
  }
`;

export const HelpArticleGridItem = styled.div`
  border-radius: 24px;
  background: #fafafa;
  position: relative;
  min-height: 362px;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  padding: 24px;
  a {
    position: absolute;
    display: inline-flex;
    padding: 12px 24px;
    width: fit-content;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 60px;
    background: #fff;
    color: #6772e5;
    text-decoration: none;
    font-size: 14px;
    font-weight: 400;
    /* image elevations 1 */
    box-shadow: 0px 4px 20px 0px rgba(84, 84, 84, 0.25);
    top: 16px;
    right: 14px;
    z-index: 3;
  }
  span {
    width: fit-content;
    height: fit-content;
    display: flex;
    justify-content: center;
  }
  img {
    width: 96%;
  }
  div {
    &.videos {
      height: auto;
      h2 {
        margin-bottom: 0;
      }
    }
    position: absolute;
    bottom: 0;
    height: 130px;
    width: 100%;
    padding: 24px 30px;
    &::after {
      position: absolute;
      content: "";
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      border-radius: 0px 0px 24px 24px;
      background: rgba(241, 246, 250, 0.4);
      backdrop-filter: blur(10px);
    }
    h2 {
      position: relative;
      z-index: 1;
      color: #3b3f42;
      font-size: 18px;
      font-weight: 700;
      margin-bottom: 12px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;

      -webkit-box-orient: vertical;
    }
    p {
      position: relative;
      z-index: 1;
      color: #555;
      font-size: 16px;
      font-weight: 400;
      line-height: 22px; /* 137.5% */

      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;

      -webkit-box-orient: vertical;
    }
  }
  @media screen and (max-width: 768px) {
    min-height: 300px;
    height: 300px;
  }
  @media screen and (max-width: 460px) {
    min-height: 200px;
    height: auto;
    span {
      img {
        width: 100%;
        height: auto;
      }
    }
  }
`;

export const HelpArticlesGridAreaWrapper = styled.div`
  &.template {
    .left {
      background: #a389f4;
      a {
        display: inline-flex;
        padding: 12px 24px;
        width: fit-content;
        justify-content: center;
        align-items: center;
        gap: 10px;
        border-radius: 60px;
        background: #fff;
        color: #6772e5;
        font-size: 14px;
        font-weight: 400;
        /* image elevations 1 */
        box-shadow: 0px 4px 20px 0px rgba(84, 84, 84, 0.25);
      }
    }
  }
  grid-area: 1 / 1 / span 1 / span 2;
  width: 100%;
  border-radius: 24px;
  background: #f1f6fa;
  display: flex;
  .left {
    border-radius: 24px 0px 0px 24px;
    background: #6772e5;
    max-width: 336px;
    width: 100%;
    padding: 40px;
    height: 100%;
    display: flex;
    flex-direction: column;
    h3 {
      color: #fff;
      font-size: 24px;
      font-weight: 700;
      margin-bottom: 16px;
    }
    p {
      color: #fff;
      font-size: 16px;
      font-weight: 400;
      margin-bottom: 30px;
    }
    a {
      margin-top: auto;
      color: #fff;
      font-size: 16px;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      span {
        margin-right: 8px;
      }
      font-weight: 400;
    }
  }
  .right {
    flex: 1;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    .left {
      max-width: 100%;
      border-radius: 24px 24px 0 0;
    }
  }
  @media screen and (max-width: 460px) {
    grid-area: 1 / 1;
  }
`;
