import React from "react";
import { AppLayout } from "@/layouts";
import * as Section from "../modules/free";

const Free: React.FC = () => {
  return (
    <AppLayout name="free" is_only_footer={true}>
      <Section.Search />
      <Section.BlogArticles />
      <Section.HelpVideos />
      <Section.HelpArticles />
      <Section.ROICalculator />
      <Section.Templates />
      <Section.Playbook />
    </AppLayout>
  );
};

export default Free;
