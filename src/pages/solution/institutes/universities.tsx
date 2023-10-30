import React, { useState, useEffect, useContext } from "react";
import { AppLayout } from "@/layouts";
import * as Section from "@/modules/solution/institutes";
import { Discover } from "@/modules/home";
import { SolutionInstitute } from "@/context/contexts";

const InstitutesUniversities: React.FC = () => {
  const [data, setData] = useState<any>({});
  const { solutionInstitute } = useContext<any>(SolutionInstitute);
  useEffect(() => {
    if (
      solutionInstitute.filter((f: any) => f.page.key === "universities")
        .length > 0
    ) {
      setData(
        solutionInstitute.filter((f: any) => f.page.key === "universities")[0]
      );
    }
  }, [solutionInstitute]);

  return (
    <AppLayout name="solution_institution_universities">
      <Section.Boost
        description={data?.landing_description}
        image={data?.landing_image}
        subtitle={data?.landing_subtitle}
        title={data?.landing_title}
      />
      <Section.Trusted />
      <Section.Improve data={data?.improve_data} title={data?.improve_title} />
      <Section.Helping
        description={data?.help_description}
        header={data?.help_header}
        image={data?.help_image}
        title={data?.help_title}
      />
      <Section.Decrease
        description={data?.decrease_description}
        image={data?.descrease_image}
        title={data?.decrease_title}
      />
      <Section.Simplify
        description={data?.simplify_description}
        image={data?.simplify_image}
        title={data?.simplify_title}
      />
      <Section.Toolkit
        description={data?.toolkit_description}
        title={data?.toolkit_title}
      />
      <Section.Admission
        description={data?.admission_description}
        grid={data?.admission_data}
        title={data?.admission_title}
      />
      <Discover bg="#F1F6FA" />
    </AppLayout>
  );
};

export default InstitutesUniversities;
