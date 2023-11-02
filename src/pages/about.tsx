import { AppLayout } from "@/layouts";
import React from "react";
import { Trusted } from "@/modules/solution/institutes";
import * as Section from "@/modules/aboutus";
const AboutUs: React.FC = () => {
  return (
    <AppLayout name="about" is_only_footer>
      <Section.Story />
      <Section.Education />
      <Section.Guide />
      <Section.DiscoversIT />
      <Section.Careers />
      <Trusted />
      <Section.Spotlight />
      <Section.Investers />
    </AppLayout>
  );
};

export default AboutUs;
