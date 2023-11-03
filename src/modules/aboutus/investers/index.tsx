import React from "react";
import * as Styled from "./investers.styles";
import { Profit, Boost } from "@/components/SVGs/others";

export const Investers: React.FC = () => {
  return (
    <Styled.InvesterWrapper>
      <h1>investors</h1>
      <h2>Our Customers</h2>
      <h3>They believe in us</h3>
      <Styled.ProductView>
        <div>
          <Boost />
          <h4>Bootstrapped</h4>
        </div>
        <Styled.Stick />
        <div>
          <Profit />
          <h4>Profitable</h4>
        </div>
      </Styled.ProductView>
    </Styled.InvesterWrapper>
  );
};
