import React, { useContext, useEffect, useState } from "react";
import { AppLayout } from "@/layouts";
import * as Section from "@/modules/solution/team";
import { Discover } from "@/modules/home";
import { SolutionTeam } from "@/context/contexts";

const TeamBusiness: React.FC = () => {
  const [data, setData] = useState<any>([]);
  const { solutionTeam } = useContext<any>(SolutionTeam);

  useEffect(() => {
    if (solutionTeam.filter((f: any) => f.page.key === "business").length > 0) {
      setData(solutionTeam.filter((f: any) => f.page.key === "business")[0]);
    }
  }, [solutionTeam]);
  return (
    <AppLayout name="solution_team_business">
      <Section.Landing
        description={data?.landing_description}
        spanColor={data?.landing_title_color}
        subtitle={data?.landing_subtitle}
        subtitleColor={data?.landing_subtitle_color}
        title={data?.landing_array_title}
      />
      <Section.Features
        data={data?.feature_data}
        description={data?.feature_description}
        title={data?.feature_title}
        bullets={data?.feature_bullets}
      />
      <Section.Recommended
        data={data?.recommend_data}
        tabs={data?.recommend_tabs}
        title={data?.recommed_title}
        bg="#F1F6FA"
        titleColor="#1E2123"
        textColor="#3B3F42"
        tabStyle={true}
      />
      <Section.Enjoy
        description={data?.enjoy_description}
        grid={data?.enjoy_data}
        title={data?.enjoy_title}
      />
      <Section.Integrate
        description={data?.integrate_description}
        title={data?.integrate_title}
      />
      <Discover bg="#F1F6FA" />
    </AppLayout>
  );
};

export default TeamBusiness;
