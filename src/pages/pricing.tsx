import React from "react";
import { AppLayout } from "@/layouts";
import * as Section from "@/modules/pricing";

const Pricing: React.FC = () => {
  return (
    <AppLayout name="pricing">
      <Section.Navigation>
        <Section.CoreModules />
        <Section.AddonModules />
        <Section.Services />
      </Section.Navigation>
      <Section.FAQs />
    </AppLayout>
  );
};

export default Pricing;
