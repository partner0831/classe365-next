import React, { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { BsArrowRight } from "react-icons/bs";
import * as Comp from "@/components";
import * as Styled from "./landing.styles";

type Props = {
  title_prefix?: string;
  title_suffix?: string;
  title_array?: any[];
  description?: string;
};

export const Landing: React.FC<Props> = ({
  description = "",
  title_array = [],
  title_prefix = "",
  title_suffix = "",
}) => {
  const [title_data, setTitle_data] = useState(["Loading...", 2000]);

  useEffect(() => {
    if (title_array.length > 0) {
      setTitle_data(title_array);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title_array]);

  return (
    <Styled.LandingSectionWrapper>
      <Styled.LandingShapeWrapper>
        {/* <Comp.Shape1 className="shape-1" />
        <Comp.Shape2 className="shape-2" />
        <Comp.Shape3 className="shape-3" />
        <Comp.Shape4 className="shape-4" />
        <Comp.Shape5 className="shape-5" /> */}
        <img src="/assets/images/shapes/CRM.png" alt="" className="shape-1" />
        <img
          src="/assets/images/shapes/Schedules & communication.png"
          alt=""
          className="shape-2"
        />
        <img src="/assets/images/shapes/SIS.png" alt="" className="shape-3" />
        <img
          src="/assets/images/shapes/Add-ons.png"
          alt=""
          className="shape-4"
        />
        <img src="/assets/images/shapes/LMS.png" alt="" className="shape-5" />
      </Styled.LandingShapeWrapper>
      <h1>
        {title_prefix}{" "}
        <span>
          <TypeAnimation
            sequence={[
              "Education,",
              2000,
              "Student Management,",
              2000,
              "Learner Journey,",
              2000,
            ]}
            speed={30}
            repeat={Infinity}
          />
        </span>
        <b>{title_suffix}</b>
      </h1>
      <p>{description}</p>
      <Styled.LandingButtonWrapper>
        <Comp.Button
          bg="#6772E5"
          border="#6772E5"
          font="#fff"
          className="shadow"
        >
          <span>Try For Free</span>
          <BsArrowRight />
        </Comp.Button>
        <Comp.Button bg="transparent" border="#6772E5" font="#6772E5">
          Book a Demo
        </Comp.Button>
      </Styled.LandingButtonWrapper>
      <Styled.LandingVideoWrapper>
        <img src="/assets/images/shapes/E-commerce.png" alt="" />
        {/* <img src="/assets/images/shapes/shape-6.png" alt="shape" /> */}
      </Styled.LandingVideoWrapper>
    </Styled.LandingSectionWrapper>
  );
};
