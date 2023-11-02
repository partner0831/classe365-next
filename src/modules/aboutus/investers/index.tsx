import React from "react";
import * as Styled from "./investers.styles";
import { ProductIcon } from "@/components/SVGs/menu";

export const Investers: React.FC = () => {
  return (
    <Styled.InvesterWrapper>
      <h1>investors</h1>
      <h2>Our Customers</h2>
      <h3>They believe in us</h3>
      <div>
        <div>
          <ProductIcon />
          <h4>Bootstrapped</h4>
        </div>
        <Styled.Stick />
        <div>
          <ProductIcon />
          <h4>Profitable</h4>
        </div>
      </div>
    </Styled.InvesterWrapper>
  );
};
