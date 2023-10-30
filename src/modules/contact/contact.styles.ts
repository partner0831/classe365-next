import { styled } from "styled-components";

export const ContactFormWrapper = styled.div`
  max-width: 1240px;
  width: 95%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  padding-top: 80px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding-top: 40px;
  }
`;

export const ContactDetailWrapper = styled.div`
  max-width: 605px;
  width: 50%;
  margin-right: 44px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    max-width: 100%;
    width: 100%;
    margin-right: 0px;
    margin-bottom: 40px;
  }
`;

export const ContactDescWrapper = styled.div`
  img {
    display: block;
    width: 165px;
    margin-bottom: 55px;
  }
  h1 {
    font-size: 48px;
    font-weight: 700;
    color: #1e2123;
    width: 100%;
    max-width: 438px;
    margin-bottom: 14px;
    span {
      color: #4ed163;
      font-family: "Roboto Slab", serif;
    }
  }
  p {
    color: #3b3f42;
    font-size: 18px;
    font-weight: 400;
    line-height: 28px; /* 155.556% */
    margin-bottom: 14px;
    max-width: 536px;
    width: 100%;
  }
  h3 {
    display: flex;
    align-items: center;
    span:first-child {
      color: #1e2123;
      font-size: 18px;
      font-weight: 700;
      line-height: 28px; /* 155.556% */
    }
    span:last-child {
      display: flex;
      width: 40px;
      height: 40px;
      background-color: #f1f6fa;
      align-items: center;
      justify-content: center;
      border-radius: 999px;
      margin-left: 8px;
      cursor: pointer;
    }
  }
  @media screen and (max-width: 768px) {
    h1 {
      font-size: 30px;
    }
    p {
      font-size: 14px;
    }
    h3 {
      span:first-child {
        font-size: 14px;
      }
    }
  }
`;

export const ContactAwardWrapper = styled.div`
  border-radius: 12px;
  border: 1px solid #f0f0f0;
  padding: 24px;
  margin-top: 40px;
  div {
    display: flex;
    align-items: center;
  }
  & > div:first-child {
    margin-bottom: 60px;
    img {
      width: 62px;
      margin-right: 24px;
    }
    p {
      color: #3b3f42;
      font-size: 18px;
      font-weight: 400;
      line-height: 28px; /* 155.556% */
    }
  }
  div:last-child {
    align-items: center;
    div {
      display: flex;
    }
    img {
      width: 100%;
    }
    & > :not(:first-child) {
      margin-left: 24px;
    }
  }
  @media screen and (max-width: 768px) {
    padding: 20px;
    & > div:first-child {
      p {
        font-size: 14px;
        line-height: 20px;
      }
      margin-bottom: 30px;
    }
  }
`;

export const ContactFormContainer = styled.div`
  max-width: 600px;
  width: 50%;
  border-radius: 12px;
  background: #fafafa;
  padding: 24px;
  height: fit-content;
  h2 {
    color: #000;
    font-size: 24px;
    font-weight: 600;
    line-height: 30px; /* 125% */
    margin-bottom: 32px;
  }
  @media screen and (max-width: 768px) {
    max-width: 100%;
    padding: 20px;
    width: 100%;
  }
`;

export const ContactInputGroup = styled.div`
  display: grid;
  grid-gap: 24px 14px;
  grid-template-columns: repeat(2, 1fr);
  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
    grid-gap: 14px;
  }
`;

export const ContactForm = styled.div`
  & > :not(:first-child) {
    margin-top: 24px;
  }
  .submit-button {
    width: 125px;
  }
  @media screen and (max-width: 480px) {
    & > :not(:first-child) {
      margin-top: 14px;
    }
  }
`;

export const LocationWrapper = styled.div`
  padding: 150px 0;
  max-width: 1000px;
  width: 95%;
  margin: auto;

  & > h1 {
    color: #1e2123;
    text-align: center;
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 10px;
  }
  & > p {
    color: #3b3f42;
    text-align: center;
    font-size: 18px;
    font-weight: 400;
    line-height: 28px; /* 155.556% */
    margin-bottom: 60px;
  }
  @media screen and (max-width: 768px) {
    padding: 50px 0;
    & > h1 {
      font-size: 28px;
    }
    & > p {
      font-size: 14px;
      line-height: 20px;
      margin-bottom: 30px;
    }
  }
`;

export const LocationGridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 32px;
  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-gap: 24px;
  }
`;

export const LocationCardWrapper = styled.div`
  padding: 24px;
  border-radius: 12px;
  border: 1px solid #f0f0f0;
  background: #fff;
  div {
    display: flex;
    align-items: center;
    margin-bottom: 24px;
    img {
      width: 32px;
      margin-right: 16px;
    }
    h4 {
      color: #1e2123;
      text-align: center;
      font-size: 18px;
      font-weight: 700;
      line-height: 28px; /* 155.556% */
    }
  }
  p {
    color: #3b3f42;
    font-size: 16px;
    font-weight: 400;
    line-height: 28px; /* 175% */
  }
  @media screen and (max-width: 600px) {
    padding: 20px;
  }
`;

export const ContactEmail = styled.div`
  padding: 12px;
  display: flex;
  justify-content: center;
  color: #3b3f42;
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  line-height: 28px; /* 175% */
  border-radius: 12px;
  margin-top: 20px;
  border: 1px solid #f0f0f0;
`;
