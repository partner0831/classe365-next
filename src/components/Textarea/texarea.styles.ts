import { styled } from "styled-components";

export const TextareaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  span {
    color: #555;
    font-size: 16px;
    font-weight: 400;
    line-height: 30px; /* 187.5% */
  }
  textarea {
    width: 100%;
    resize: vertical;
    border-radius: 6px;
    border: 1px solid #f0f0f0;
    background: #fff;
    outline: none;
    min-height: 154px;
    padding: 16px;
    font-size: 16px;
  }
`;
