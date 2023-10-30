import React from "react";
import { IoClose } from "react-icons/io5";
import * as Comp from "@/components";
import * as Styled from "./appLayout.styles";
import * as Data from "./data";

type Props = {
  open: boolean;
  onClose: () => void;
};

export const MobileNavigation: React.FC<Props> = ({ onClose, open }) => {
  const { headerLeftNavs, headerRightNavs } = Data;

  return (
    <React.Fragment>
      <Styled.MobileNavbarContainer open={open}>
        <Styled.CloseButton onClick={onClose}>
          <IoClose />
        </Styled.CloseButton>
        <Comp.AppLogo />
        <Styled.MobileNavContent>
          {headerLeftNavs.map((nav, index) => (
            <Comp.NavItem {...nav} key={index} />
          ))}
          {headerRightNavs.map((nav, index) => (
            <Comp.NavItem {...nav} key={index} />
          ))}
        </Styled.MobileNavContent>
      </Styled.MobileNavbarContainer>
      <Styled.MobileNavbarOverlay open={open} onClick={onClose} />
    </React.Fragment>
  );
};
