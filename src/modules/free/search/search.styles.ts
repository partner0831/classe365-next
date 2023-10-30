import styled from "styled-components";

export const SearchWrapper = styled.div`
  margin-top: 50px;
  h1 {
    color: #3b3f42;
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 32px;
    text-align: center;
  }
  @media screen and (max-width: 768px) {
    h1 {
      font-size: 24px;
    }
  }
`;

export const SearchInputWrapper = styled.div`
  max-width: 850px;
  width: 95%;
  margin: auto;
  margin-bottom: 32px;
  display: flex;
  align-items: center;
  height: 64px;
  background: #fafafa;
  border-radius: 100px;
  padding-right: 26px;
  input {
    padding: 0 36px;
    color: #3b3f42;
    font-size: 16px;
    font-weight: 400;
    height: 100%;
    flex: 1;
    border: none;
    outline: none;
    background: transparent;
    &::placeholder {
      color: #dbdbdb;
    }
  }
`;

export const SearchFilterWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  width: 95%;
  margin: auto;
  a {
    text-decoration: none;
    display: flex;
    height: 43px;
    align-items: center;
    white-space: nowrap;
    justify-content: center;
    padding: 0 24px;
    border: 1px solid #6772e5;
    border-radius: 30px;
    color: #6772e5;
    cursor: pointer;
    font-size: 16px;
    font-weight: 400;
    margin: 0 10px 10px;
  }
`;
