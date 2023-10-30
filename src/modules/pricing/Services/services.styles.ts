import { styled } from "styled-components";

export const SevicesWrapper = styled.div`
  /* background: #fafafa; */
  position: relative;
  padding: 300px 0 100px;
  @media screen and (max-width: 768px) {
    background: #fff;
    padding: 80px 0 0;
  }
`;

export const ServicesContainer = styled.div`
  max-width: 1240px;
  margin: auto;
  width: 95%;
`;

export const ServicesTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 100px;
  h1 {
    margin-right: 32px;
    color: #1e2123;
    font-size: 36px;
    font-weight: 700;
    text-align: center;
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 45px;
    flex-direction: column;
    h1 {
      font-size: 24px;
    }
  }
`;

export const SwitchWrapper = styled.div`
  display: flex;
  align-items: center;

  .handle-label {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    color: #fff;
    font-size: 16px;
    font-weight: 400;
  }

  & > span {
    display: none;
  }

  @media screen and (max-width: 768px) {
    margin-top: 26px;
    & > :not(:first-child) {
      margin-left: 14px;
    }
    & > span {
      color: #000;
      font-size: 16px;
      font-weight: 400;
      display: block;
    }
  }
`;

export const ServiceTableWrapper = styled.div`
  max-width: 1240px;
  margin: auto;
  width: 95%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const TableHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 104px;
  border-radius: 12px 12px 0px 0px;
  background: #6772e5;
  div {
    color: #fff;
    font-size: 24px;
    font-weight: 600;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      margin-right: 20px;
    }
  }
  .row1 {
    font-weight: 700;
    width: 50%;
  }
  .row2 {
    width: 25%;
  }
  .row3 {
    width: 25%;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const TableBodyWrapper = styled.div`
  & > :nth-child(odd) {
    background-color: #ffffff;
  }
  & > :nth-child(even) {
    background-color: #fafafa;
  }
  @media screen and (max-width: 768px) {
    & > :nth-child(odd) {
      background-color: #fafafa;
    }
    & > :nth-child(even) {
      background-color: #ffffff;
    }
  }
`;

export const TableRowWrapper = styled.div`
  height: 112px;
  display: flex;
  div {
    color: #1e2123;
    font-size: 18px;
    font-weight: 700;
    padding: 0 44px;
    text-align: center;
  }
  .row1 {
    width: 50%;
    color: #000;
    font-weight: 400;
    text-align: left;
  }
  .row2 {
    width: 25%;
  }
  .row3 {
    width: 25%;
  }
  align-items: center;
  @media screen and (max-width: 600px) {
    justify-content: space-between;
    .row1 {
      padding: 0;
      padding-left: 24px;
      flex: 1;
      width: 100%;
    }
    .row2 {
      display: none;
    }
    .row3 {
      margin-left: 20px;
      padding: 0;
      width: fit-content;
      padding-right: 24px;
      white-space: nowrap;
    }
  }
`;
