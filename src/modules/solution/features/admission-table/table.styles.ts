import { styled } from "styled-components";

export const TableSectionWrapper = styled.div`
  max-width: 1000px;
  width: 95%;
  margin: auto;
  padding: 0 0 120px;
  @media screen and (max-width: 768px) {
    padding: 0 0 60px;
  }
`;

export const TableHeaderWrapper = styled.div`
  height: 93px;
  display: flex;
  span {
    background: #f1f6fa;
    border-radius: 4px 4px 0px 0px;
    height: 100%;
    display: flex;
    align-items: center;
    &:first-child {
      padding-left: 43px;
      max-width: 644px;
      width: 100%;
      margin-right: 18px;
      color: #000;
      font-size: 24px;
      font-weight: 700;
    }
    &:last-child {
      height: 100%;
      flex: 1;
    }
  }
  @media screen and (max-width: 768px) {
    span:first-child {
      margin-right: 0;
      max-width: 100%;
      padding: 0 20px;
    }
    span:last-child {
      display: none;
    }
  }
`;

export const TableBodyWrapper = styled.div`
  & > :nth-child(even) {
    span {
      background-color: #f1f6fa;
    }
  }
`;

export const TableRowWrapper = styled.div`
  min-height: 50px;
  display: flex;
  span {
    display: flex;
    align-items: center;

    &:first-child {
      padding-left: 43px;
      max-width: 644px;
      width: 100%;
      margin-right: 18px;
      em {
        display: none;
      }
    }
    &:last-child {
      flex: 1;
      /* height: 100%; */
      justify-content: center;
    }
  }
  @media screen and (max-width: 768px) {
    span:first-child {
      margin-right: 0;
      padding: 0 20px;
      max-width: 100%;

      em {
        display: block;
        margin-right: 10px;
      }
    }
    span:last-child {
      display: none;
    }
  }
`;
