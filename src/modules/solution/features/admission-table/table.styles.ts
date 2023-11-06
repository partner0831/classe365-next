import { styled } from "styled-components";

export const TableSectionWrapper = styled.div`
  max-width: 1028px;
  width: 95%;
  margin: auto;
  padding: 64px;
  border-radius: 30px;
  background: var(--grey-lighter, #FAFAFA);
  @media screen and (max-width: 768px) {
    padding: 64px 15px;
  }
  @media screen and (max-width: 425px) {
    padding: 32px 15px;
  }
`;

export const TableHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  h1{
    color: var(--site-heading, #1E2123);
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-align: center;
  }
  h2{
    color: var(--text-grey-light, #555);
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: center;
    margin-top: 16px;
  }
  @media screen and (max-width: 425px) {
    h1 {
      font-size: 28px;
    }
  }
`;

export const TableBodyWrapper = styled.div`
  margin: 70px 0 30px 0;
  /* & > :nth-child(even) { */
    span {
      background-color: #fff;
    }
  /* } */
  h3{
    color: var(--text-grey-dark, #3B3F42);
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin: 32px 0 8px 0;
  }
`;

export const TableRowWrapper = styled.div`
  min-height: 50px;
  display: flex;
  margin-top: 8px;
  span {
    display: flex;
    align-items: center;
    color: var(--text-grey-light, #555);
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
export const Service = styled.div`
    h6{
        color: var(--text-light, #7C7C7C);
        font-family: Inter;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin-top: 8px;
    }
    margin-bottom: 32px;
`