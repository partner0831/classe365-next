import React, { useContext, useEffect, useState } from "react";
import { AppLayout } from "@/layouts";
import * as Section from "@/modules/solution/team";
import { Discover } from "@/modules/home";
import { Admission } from "@/modules/solution/institutes";
import { SolutionTeam } from "@/context/contexts";

const TeamAdministrator: React.FC = () => {
  const [data, setData] = useState<any>([]);
  const { solutionTeam } = useContext<any>(SolutionTeam);

  useEffect(() => {
    if (
      solutionTeam.filter((f: any) => f.page.key === "administrator").length > 0
    ) {
      setData(
        solutionTeam.filter((f: any) => f.page.key === "administrator")[0]
      );
    }
  }, [solutionTeam]);
  return (
    <AppLayout name="solution_team_administrator">
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
        bg="#F4FAF1"
        titleColor="#1E2123"
        textColor="#3B3F42"
        tabStyle={true}
      />
      <Admission
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

export default TeamAdministrator;
