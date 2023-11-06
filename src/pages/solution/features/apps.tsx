import React, { useState, useEffect, useContext } from "react";
import { AppLayout } from "@/layouts";
import { SolutionFeature } from "@/context/contexts";
import * as Section from "@/modules/solution/features";
import { SolutionVideos } from "@/modules/solution/features/videos";

const FeatureApps: React.FC = () => {
  const [data, setData] = useState<any>({});
  const { solutionFeature } = useContext<any>(SolutionFeature);
  useEffect(() => {
    if (solutionFeature.filter((f: any) => f.page.key === "apps").length > 0) {
      setData(solutionFeature.filter((f: any) => f.page.key === "apps")[0]);
    }
  }, [solutionFeature]);

  return (
    <AppLayout name="solution_feature_apps" is_new_book={true}>
      <Section.Title
        subtitle={data?.landing_subtitle}
        title={data?.landing_title}
      />
      <Section.Grid data={data?.grid_data} />
      <Section.Streamline
        data={data?.streamline_data}
        description={data?.stream_description}
        title={data?.stream_title}
      />
      <Section.AdmissionTable
        data={data?.table_data?.data}
        title={data.table_title}
        subtitle={data.table_subtitle}
      />
      <SolutionVideos />
    </AppLayout>
  );
};

export default FeatureApps;
