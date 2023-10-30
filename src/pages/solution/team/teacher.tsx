import React, { useContext, useEffect, useState } from "react";
import { Trusted, Boost } from "@/modules/solution/institutes";
import { Discover } from "@/modules/home";
import { AppLayout } from "@/layouts";
import * as Section from "@/modules/solution/team";
import { SolutionTeam } from "@/context/contexts";

const TeamTeachers: React.FC = () => {
  const [data, setData] = useState<any>([]);
  const { solutionTeam } = useContext<any>(SolutionTeam);

  useEffect(() => {
    if (solutionTeam.filter((f: any) => f.page.key === "teachers").length > 0) {
      setData(solutionTeam.filter((f: any) => f.page.key === "teachers")[0]);
    }
  }, [solutionTeam]);

  return (
    <AppLayout name="solution_team_teacher">
      <Boost
        description={data?.landing_description}
        image={data?.landing_image}
        subtitle={data?.landing_subtitle}
        title={data?.landing_text_title}
      />
      <Trusted />
      <Section.Manage
        description={data?.manage_description}
        image={data?.manage_image}
        link={data?.manage_link}
        title={data?.manage_title}
      />
      <Section.Registration
        description={data?.regist_description}
        image={data?.regist_image}
        link={data?.regist_link}
        title={data?.regist_title}
      />
      <Section.Powerful
        description={data?.powerful_description}
        image={data?.powerful_image}
        link={data?.powerful_link}
        title={data?.powerful_title}
      />
      <Section.Recommended
        data={data?.recommend_data}
        tabs={data?.recommend_tabs}
        title={data?.recommed_title}
      />
      <Section.Enjoy
        description={data?.enjoy_description}
        grid={data?.enjoy_data}
        title={data?.enjoy_title}
      />
      <Discover bg="#F1F6FA" />
    </AppLayout>
  );
};

export default TeamTeachers;
