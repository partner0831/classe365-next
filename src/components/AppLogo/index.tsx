import React from "react";
import { useRouter } from "next/router";
import { AppLogoSVG } from "../SVGs/logo";
import * as Styled from "./appLogo.styles";

export const AppLogo: React.FC = () => {
  const router = useRouter();
  return (
    <Styled.AppLogoWrapper onClick={() => router.push("/")}>
      <AppLogoSVG />
    </Styled.AppLogoWrapper>
  );
};
