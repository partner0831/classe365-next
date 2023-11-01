import React from "react";
import Image from "next/image";
import * as Comp from "@/components";
import * as Styled from "./meet.styles";
import { GiH2O } from "react-icons/gi";

export const MeedOurCustomer: React.FC = () => {
  const handleSelectChange = () => {};
  return (
    <Styled.MeetWrapper>
      <Styled.MeetHeader>
        <h6>Meet Our Customers</h6>
        <Comp.Select
          onChange={handleSelectChange}
          options={[
            { label: "Schools", value: "Schools" },
            { label: "Academies", value: "Schools" },
            { label: "Higher Education & Universities", value: "Schools" },
            { label: "Corporate Learning", value: "Schools" },
          ]}
          value={"Schools"}
        />
      </Styled.MeetHeader>
      <Styled.SoftwareView>
        <Styled.SoftwareWrapper>
          <h1>
            Classe365 is all about flexibility, affordability and technological
            sophistication.
          </h1>
          <div>
            <h2>The Mayor’s Youth Employment Program (MYEP)</h2>
            <h3>City of Charlotte, United States of America</h3>
          </div>
        </Styled.SoftwareWrapper>

        <Styled.SoftwareImageWrapper>
          <img src={"/assets/images/testimonials/test1.png"} alt="image" />
          <div>
            <p>
              Classe365 is all about flexibility, affordability and
              technological sophistication. Prior to Classe365, we had no CRM.
              We expanded 60% of our human capital manually managing data. This
              antiquated process was unproductive, it exhausted our human
              capital and it made us more susceptible to errors
            </p>
          </div>
        </Styled.SoftwareImageWrapper>
      </Styled.SoftwareView>
    </Styled.MeetWrapper>
  );
};
