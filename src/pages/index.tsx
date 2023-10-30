import React, { useState, useContext, useEffect } from "react";
import { AppLayout } from "@/layouts";
import * as Section from "@/modules/home";
import { Home as HomeContext } from "@/context/contexts";

const Home: React.FC = () => {
  const [data, setData] = useState<any>({});
  const { homeContext } = useContext<any>(HomeContext);

  useEffect(() => {
    if (homeContext) {
      setData(homeContext);
    }
  }, [homeContext]);

  return (
    <AppLayout name="home">
      <Section.Landing
        description={
          data?.landing_description ??
          "Unlock a seamless learner journey. From admission to alumni networking, and beyond - our complete education solution has you covered."
        }
        title_array={data?.landing_title_array}
        title_prefix={data?.landing_title_prefix ?? "Transforming"}
        title_suffix={data?.landing_title_suffix ?? "One Institution at a Time"}
      />
      <Section.Experience
        data={data?.experience_data}
        title={
          data?.experience_title ??
          "Experience the Best-in-Class with Classe365"
        }
      />
      <Section.Solutions
        data={data?.solution_data}
        subtitle={data?.solution_subtitle ?? "Great solutions for everyone"}
        title={
          data?.solution_title ??
          "Smart Solutions For Learning Management Teams"
        }
      />
      <Section.Features
        data={data?.feature_data}
        icon={data?.feature_icon ?? "/assets/images/clap.gif"}
        image={data?.feature_image ?? "/assets/images/features/feature.png"}
        subtitle={data?.feature_subtitle ?? "Feathers in our cap"}
        text={
          data?.feature_text ??
          "The Australia & New Zealand EdTech 50 for Management Systems"
        }
        title={
          data?.feature_title ??
          "Most awarded EdTech company of 2021/22, including being part of Top 65 fastest growing companies of 2021 in APAC"
        }
      />
      <Section.Institutions
        data={data?.home_institutions}
        subtitle={data?.institution_subtitle ?? "For all Institutions"}
        title={
          data?.institution_title ??
          "All-in-one learning management solution for institutions"
        }
      />
      <Section.Discover />
      <Section.Resources
        data={data?.resources}
        title={data?.resource_title ?? "All the News and Resources You Need"}
      />
    </AppLayout>
  );
};

export default Home;
