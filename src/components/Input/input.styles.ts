import { styled } from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  span {
    color: #555;
    font-size: 16px;
    font-weight: 400;
    line-height: 30px; /* 187.5% */
  }
  input {
    border-radius: 6px;
    border: 1px solid #f0f0f0;
    background: #fff;
    outline: none;
    width: 100%;
    height: 46px;
    padding: 0 16px;
    font-size: 16px;
  }
`;
