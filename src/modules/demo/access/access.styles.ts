import styled from "styled-components";

export const AccessWrapper = styled.div`
  max-width: 1240px;
  margin: auto;
  width: 95%;
  border-radius: 24px;
  background: #6772e5;
  padding: 60px;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
  @media screen and (max-width: 768px) {
    padding: 30px;
  }
`;

export const AccessTextWrapper = styled.div`
  color: #fff;
  max-width: 345px;
  width: 100%;
  h1 {
    margin-bottom: 14px;
    padding-top: 30px;
    font-size: 36px;
    font-weight: 700;
  }
  p {
    font-size: 16px;
    font-weight: 400;
  }
  @media screen and (max-width: 1024px) {
    max-width: 100%;
    margin-bottom: 30px;
    h1 {
      padding-top: 0;
    }
  }
`;

export const AccessFormWrapper = styled.div`
  min-width: 600px;
  max-width: 600px;
  width: 100%;
  border-radius: 24px;
  border: 1px solid #fff;
  padding: 30px;
  & > :not(:last-child) {
    margin-bottom: 24px;
  }
  @media screen and (max-width: 1024px) {
    max-width: 100%;
    min-width: 100%;
  }
`;

export const AccessFormGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 14px;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-gap: 24px;
  }
`;

export const AccessFormInput = styled.div`
  p {
    color: #fff;
    font-size: 16px;
    font-weight: 400;
    line-height: 30px; /* 187.5% */
    span {
      color: #f25757;
    }
  }
  input {
    width: 100%;
    height: 46px;
    border-radius: 6px;
    border: 1px solid #fff;
    background: rgba(255, 255, 255, 0.2);
    outline: none;
    padding: 0 12px;
    color: #fff;
  }
  & > span {
    color: #fff;
    font-size: 12px;
    font-weight: 400;
    line-height: 30px;
  }
`;

export const FormButton = styled.div`
  margin-top: 40px;
  border-radius: 49px;
  background: #fff;
  box-shadow: 0px 2px 10px 0px rgba(175, 175, 175, 0.25);
  color: #6772e5;
  font-size: 16px;
  font-weight: 600;
  padding: 16px 32px;
  width: fit-content;
  span {
    margin-right: 10px;
  }
`;
