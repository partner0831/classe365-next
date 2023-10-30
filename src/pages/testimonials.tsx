import React from "react";
import { AppLayout } from "@/layouts";
import * as Section from "@/modules/testimonials";

const Testimonials: React.FC = () => {
  return (
    <AppLayout name="testimonials" is_only_footer>
      <Section.Landing />
      <Section.MeedOurCustomer />
      <Section.Review />
      <Section.GreatSoftware />
      <Section.Slider />
      <Section.Convinced />
    </AppLayout>
  );
};

export default Testimonials;
