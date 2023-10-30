import { styled } from "styled-components";

export const CollapseWrapper = styled.div`
  border-radius: 12px;
  border: 1px solid #6772e5;
  contain: content;
`;

export const CollapseHeader = styled.div`
  padding: 32px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: space-between;
  h3 {
    color: #1e2123;
    font-size: 20px;
    font-weight: 700;
  }
  @media screen and (max-width: 768px) {
    padding: 24px 14px;
    h3 {
      font-size: 18px;
    }
  }
`;

export const CollapseContent = styled.div<{ open: boolean }>`
  padding: ${({ open }) => (open ? "0 80px 32px 32px" : "0 80px 0 32px")};
  height: ${({ open }) => (open ? "fit-content" : "0px")};
  opacity: ${({ open }) => (open ? 1 : 0)};
  color: #3b3f42;
  transition: all 0.3s ease-in-out;
  font-size: 16px;
  font-weight: 400;
  @media screen and (max-width: 768px) {
    font-size: 14px;
    padding: ${({ open }) => (open ? "0 14px 24px" : "0 14px 0")};
  }
`;
