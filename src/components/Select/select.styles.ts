import { styled } from "styled-components";

export const SelectWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  span {
    color: #555;
    font-size: 16px;
    font-weight: 400;
    line-height: 30px; /* 187.5% */
    
  }
  div {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    svg {
      position: absolute;
      right: 14px;
    }
  }
  select {
    height: 46px;
    width: 100%;
    border-radius: 6px;
    border: 1px solid #f0f0f0;
    background: #fff;
    outline: none;
    padding: 0 16px;
    font-size: 16px;
    appearance: none;
  }
  option{
    color: var(--text-grey-dark, #3B3F42);
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px; /* 175% */
  }
`;
