import { styled } from "styled-components";

export const CoreSectionWrapper = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1040px;
  width: 95%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 64px;
  grid-row-gap: 48px;
  padding-top: 348px;
  margin-top: -300px;
  @media screen and (max-width: 1024px) {
    padding-top: 30px;
    margin-top: 0;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-gap: 5px;
  }
`;

export const CoreItem = styled.div<{ open: boolean }>`
  h3 {
    color: #1e2123;
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 16px;
    svg {
      display: none;
    }
  }
  p {
    color: #555;
    font-size: 16px;
    font-weight: 400;
    line-height: 25px; /* 156.25% */
    transition: all 0.3s;
  }
  @media screen and (max-width: 768px) {
    h3 {
      border-bottom: 1px solid #f0f0f0;
      padding: 15px 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
      font-size: 16px;
      margin: 0;
      svg {
        display: block;
        transition: all 0.3s;
        transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0deg)")};
      }
    }
    p {
      contain: content;
      font-size: 14px;
      padding-top: ${({ open }) => (open ? "15px" : 0)};
      height: ${({ open }) => (open ? "fit-content" : 0)};
      opacity: ${({ open }) => (open ? 1 : 0)};
    }
  }
`;
