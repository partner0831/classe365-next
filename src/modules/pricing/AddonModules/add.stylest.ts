import { styled } from "styled-components";

export const AddModulesWrapper = styled.div`
  position: relative;
  z-index: 1;
  padding: 300px 0 100px;
  h1 {
    color: #1e2123;
    font-size: 36px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 75px;
  }
  @media screen and (max-width: 768px) {
    padding: 80px 0 0;
    h1 {
      margin-bottom: 30px;
      font-size: 24px;
    }
  }
`;

export const AddModuleTableWrapper = styled.div`
  max-width: 1240px;
  width: 95%;
  margin: auto;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const AddModuleTableHeader = styled.div`
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
  }
  .row1 {
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

export const AddModuleTableBody = styled.div`
  & > :nth-child(odd) {
    background-color: #fafafa;
  }
`;

export const AddModuleTableRow = styled.div`
  display: flex;
  background: #fff;
  flex-wrap: wrap;
  div {
    padding: 34px 44px;
  }
  .row1 {
    width: 50%;
    h3 {
      display: flex;
      align-items: center;
      color: #000;
      font-size: 20px;
      font-weight: 700;
      margin-bottom: 20px;
      svg {
        width: 32px;
        height: 32px;
        margin-right: 16px;
      }
    }
    p {
      color: #3b3f42;
      font-size: 18px;
      font-weight: 400;
      margin-bottom: 14px;
    }
    span {
      color: #6772e5;
      font-size: 18px;
      font-weight: 400;
      cursor: pointer;
    }
  }
  .row2 {
    width: 25%;
    text-align: center;
    h4 {
      color: #1e2123;
      font-size: 18px;
      font-weight: 700;
      margin-bottom: 12px;
    }
    p {
      color: #555;
      font-size: 16px;
      font-weight: 400;
    }
  }
  .row3 {
    width: 25%;
    display: flex;
    justify-content: center;
    .add-button {
      cursor: pointer;
      height: fit-content;
      padding: 16px 32px;
      text-align: center;
      width: 124px;
      border-radius: 999px;
      border: 1px solid #6772e5;
      background: #f1f6fa;
      color: #6772e5;
      font-size: 16px;
      font-weight: 600;
    }
  }
  .row4 {
    display: none;
  }
  @media screen and (max-width: 768px) {
    padding: 24px;
    align-items: center;
    div {
      padding: 0;
    }
    .row1 {
      width: 100%;
      padding-bottom: 12px;
      h3 {
        font-size: 16px;
        margin-bottom: 0px;
        svg {
          width: 24px;
          height: 24px;
          margin-right: 12px;
        }
      }
      p,
      span {
        display: none;
      }
    }
    .row2 {
      flex: 1;
      text-align: left;
      h4 {
        font-size: 16px;
        margin-bottom: 4px;
      }
      p {
        font-size: 14px;
      }
    }
    .row3 {
      width: fit-content;
      .add-button {
        padding: 11px 22px;
        width: 86px;
        font-size: 12px;
      }
    }
    .row4 {
      display: block;
      width: 100%;
      margin-top: 12px;
      color: #6772e5;
      font-size: 14px;
      font-weight: 400;
      span {
        cursor: pointer;
      }
    }
  }
`;
