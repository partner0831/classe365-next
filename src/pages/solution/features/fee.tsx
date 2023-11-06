import React, { useState, useEffect, useContext } from "react";
import { AppLayout } from "@/layouts";
import * as Section from "@/modules/solution/features";
import { SolutionFeature } from "@/context/contexts";
import { SolutionVideos } from "@/modules/solution/features/videos";

const FeatureFee: React.FC = () => {
  const [data, setData] = useState<any>({});
  const { solutionFeature } = useContext<any>(SolutionFeature);
  useEffect(() => {
    if (solutionFeature.filter((f: any) => f.page.key === "fee").length > 0) {
      setData(solutionFeature.filter((f: any) => f.page.key === "fee")[0]);
    }
  }, [solutionFeature]);

  return (
    <AppLayout name="solution_feature_fee" is_new_book={true}>
      <Section.Landing
        data={data?.landing_arrays}
        description={data?.landing_description}
        image={data?.landing_image}
        subtitle={data?.landing_subtitle}
        title={data?.landing_title}
      />
      <Section.Streamline
        data={data?.streamline_data}
        description={data?.stream_description}
        title={data.stream_title}
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

export default FeatureFee;
