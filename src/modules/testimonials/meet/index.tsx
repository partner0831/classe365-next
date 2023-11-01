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
          <h2>The Mayor’s Youth Employment Program (MYEP)</h2>
          <h3>City of Charlotte, United States of America</h3>
        </Styled.SoftwareWrapper>

        <Image
          src={"/assets/images/testimonials/test1.png"}
          width={847}
          height={464}
          alt="image"
        />
      </Styled.SoftwareView>
    </Styled.MeetWrapper>
  );
};
