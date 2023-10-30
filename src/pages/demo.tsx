import React from "react";
import * as Section from "@/modules/demo";
import { Trusted } from "@/modules/solution/institutes";
import { AppLayout } from "@/layouts";

const Demo: React.FC = () => {
  return (
    <AppLayout name="demo">
      {/* <Seo {...seo_lists["pricing"]} /> */}
      <Section.Landing />
      <Section.Schedule />
      <Section.Videos />
      <Section.Calendar />
      <Section.Access />
      <Trusted />
      {/* <Footer.Navigation /> */}
    </AppLayout>
  );
};

export default Demo;
