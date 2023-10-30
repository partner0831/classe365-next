import React, { useState, useMemo, useEffect } from "react";
import axios from "axios";
import { STRAPI_API } from "@/config";
import * as Context from "./contexts";
import { Loading } from "@/components/Loading";

export const AppContext: React.FC<React.HTMLAttributes<HTMLElement>> = ({
  children,
}) => {
  const [loading, setLoading] = useState(true);
  const [homeContext, setHomeContext] = useState<any>(null);
  const [solutionFeature, setSolutionFeature] = useState<any>([]);
  const [solutionInstitute, setSolutionInstitute] = useState<any>([]);
  const [solutionTeam, setSolutionTeam] = useState<any>([]);

  const homeContextValue = useMemo(
    () => ({ homeContext, setHomeContext }),
    [homeContext]
  );

  const solutionFeatureValue = useMemo(
    () => ({ solutionFeature, setSolutionFeature }),
    [solutionFeature]
  );

  const solutionInstituteValue = useMemo(
    () => ({ solutionInstitute, setSolutionInstitute }),
    [solutionInstitute]
  );

  const solutionTeamValue = useMemo(
    () => ({ solutionTeam, setSolutionTeam }),
    [solutionTeam]
  );

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      setLoading(true);
      const homeData = await axios.get(`${STRAPI_API}/home`);
      const solutionFeatureData = await axios.get(
        `${STRAPI_API}/classe-365-solution-features`
      );
      const solutionInstituteData = await axios.get(
        `${STRAPI_API}/solution-institutes`
      );
      const solutionTeamData = await axios.get(`${STRAPI_API}/solution-teams`);
      setHomeContext(homeData.data);
      setSolutionFeature(solutionFeatureData.data);
      setSolutionInstitute(solutionInstituteData.data);
      setSolutionTeam(solutionTeamData.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      alert("There are some errors on Strapi Server.");
    }
  };

  return (
    <Context.Home.Provider value={homeContextValue}>
      <Context.SolutionFeature.Provider value={solutionFeatureValue}>
        <Context.SolutionInstitute.Provider value={solutionInstituteValue}>
          <Context.SolutionTeam.Provider value={solutionTeamValue}>
            {loading ? <Loading /> : children}
          </Context.SolutionTeam.Provider>
        </Context.SolutionInstitute.Provider>
      </Context.SolutionFeature.Provider>
    </Context.Home.Provider>
  );
};
