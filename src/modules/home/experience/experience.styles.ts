import { styled } from "styled-components";

export const ExperienceSectionWrapper = styled.div`
.trusted {
  & > div {
    padding: 50px 0 0;
    margin-bottom: -60px;
    @media screen and (max-width: 768px) {
      margin-bottom: 0;
      padding-bottom: 50px;
    }
  }
}
`;

export const TitleWrapper = styled.div`
  padding: 50px 0 30px;
  top: 0;
  background-color: #fff;
  z-index: 1;
  /* position: sticky; */
  h1 {
    color: #1e2123;
    text-align: center;
    font-size: 36px;
    font-weight: 700;
    max-width: 648px;
    margin: auto;
    width: 95%;
  }
  @media screen and (max-width: 768px) {
    padding: 20px 0 24px;
    position: relative;
    h1 {
      font-size: 24px;
    }
  }
`;

export const ExperienceContentWrapper = styled.div`
  max-width: 1240px;
  margin: -100vh auto auto;
  width: 95%;
  /* margin-top: -100vh; */
  @media screen and (max-width: 768px) {
    padding-left: 5px;
    margin-top: 0;
    border-left: 1px solid #f1f6fa;
  }
`;

export const ExperienceItemWrapper = styled.div<{ color: string }>`
  max-width: 395px;
  width: 40%;
  /* min-height: 100vh; */
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  h3 {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 64px;
    position: relative;
    display: flex;
    align-items: center;
  }
  h2 {
    color: #1e2123;
    font-size: 32px;
    font-weight: 700;
    margin-top: 20px;
    margin-bottom: 24px;
  }
  img {
    width: 48px;
  }
  p {
    color: #3b3f42;
    font-size: 18px;
    font-weight: 400;
    line-height: 28px; /* 155.556% */
    margin-bottom: 32px;
  }
  h4 {
    cursor: pointer;
    color: #6772e5;
    font-size: 18px;
    font-weight: 700;
    display: flex;
    align-items: center;
    text-decoration-line: underline;
    svg {
      margin-left: 8px;
    }
  }
  div {
    display: none;
  }
  @media screen and (max-width: 1024px) {
    h3 {
      margin-bottom: 30px;
      font-size: 16px;
    }
    h2 {
      margin: 12px 0 10px;
      font-size: 24px;
    }
    p {
      font-size: 16px;
      line-height: 24px;
      margin-bottom: 16px;
    }
  }
  @media screen and (max-width: 768px) {
    min-height: auto;
    max-width: 100%;
    height: auto;
    padding: 0;
    width: 100%;
    &:not(:first-child) {
      margin-top: 40px;
    }
    h3::before {
      width: 1px;
      height: 32px;
      background-color: ${({ color }) => color};
      position: absolute;
      left: -5px;
      content: "";
    }
    img {
      width: 32px;
    }
    div.lottie-wrapper {
      display: flex;
      width: 100%;
      /* padding-top: 60%; */
      background: #d9d9d9;
      margin-top: 24px;
      position: relative;
      & > div {
        display: flex;
        width: 100% !important;
        height: 100% !important;
        margin: 0 !important;
      }
    }
    svg {
      width: 32px;
      height: 32px;
    }
  }
`;

export const ImageWrapper = styled.div`
  margin-left: auto;
  position: sticky;
  width: 60%;
  top: 0;
  height: 100vh;
  display: flex;
  align-items: center;
  padding-right: 100px;
  a {
    display: none;
    width: 100%;
    height: auto !important;
    &.active {
      display: flex;
    }
    & > div {
      margin: 0 !important;
      width: 100% !important;
      height: auto !important;
    }
  }
  @media screen and (max-width: 1024px) {
    padding-right: 2.5%;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
