import { styled } from "styled-components";

export const AppLayoutWrapper = styled.div``;

export const AppContentWrapper = styled.div`
  contain: content;
`;
export const HeaderView = styled.div`

`;
export const TopHeaderView = styled.div`
    height: 38px;
    background: #F2F2F2;
    display: flex;
    margin: auto;
    & > div{
      display: flex;
      justify-content: space-between;
      max-width: 1240px;
      width: 95%;
      margin: auto;
    }
    span{
      color: var(--03, rgba(21, 29, 70, 0.79));
      text-align: center;
      font-size: 14px;
      font-weight: 400;
      line-height: normal;
    }
`;

export const TopHeaderLeft = styled.div`
  display: flex;
  align-items: center;
  padding: 0 0 0 177px;
  svg:nth-child(2){
    margin: 0 9px;
  }
  svg:nth-child(3){
    margin: 0 30px;
  }
  svg:nth-child(4){
    margin: 0 30px;
  }
  @media screen and (max-width: 768px) {
    padding: 0 0 0 20px;
    svg:nth-child(3){
      margin: 0 10px;
    }
    svg:nth-child(4){
      margin: 0 10px;
    }
  }
`;
export const TopHeaderRight = styled.div`
   & > :not(:first-child) {
    margin-left: 21px;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const HeaderWrapper = styled.div`
  position: relative;
  max-width: 1240px;
  z-index: 10;
  width: 95%;
  margin: auto;
  height: 89px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderNavWrapper = styled.div`
  display: flex;
  align-items: center;
  & > :not(:first-child) {
    margin-left: 48px;
  }
`;

export const HeaderNavContainer = styled.div`
  display: flex;
  align-items: center;
  & > :not(:first-child) {
    margin-left: 32px;
  }
  @media screen and (max-width: 1140px) {
    & > :not(:first-child) {
      margin-left: 16px;
    }
  }
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const FooterWrapper = styled.div`
  position: relative;
  overflow: hidden;
`;

export const MobileHeaderNavWrapper = styled.div`
  display: none;
  align-items: center;
  @media screen and (max-width: 1024px) {
    display: flex;
  }
`;

export const MenuButton = styled.div`
  display: flex;
  margin-left: 16px;
  cursor: pointer;
  font-size: 24px;
`;

export const MobileNavbarContainer = styled.div<{ open: boolean }>`
  position: fixed;
  z-index: 100;
  padding: 40px 30px;
  top: 0;
  height: 100%;
  width: 320px;
  transition: all 0.3s ease-in-out;
  right: ${({ open }) => (open ? 0 : "-100%")};
  background: #fff;
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const MobileNavbarOverlay = styled.div<{ open: boolean }>`
  transition: all 0.3s ease-in-out;
  position: fixed;
  z-index: 90;
  inset: 0;
  background: #00000050;
  backdrop-filter: blur(2px);
  opacity: ${({ open }) => (open ? 1 : 0)};
  visibility: ${({ open }) => (open ? "visible" : "hidden")};
`;

export const MobileNavContent = styled.div`
  margin-top: 30px;
`;

export const CloseButton = styled.div`
  position: absolute;
  display: flex;
  font-size: 30px;
  right: 20px;
  cursor: pointer;
  top: 20px;
`;
