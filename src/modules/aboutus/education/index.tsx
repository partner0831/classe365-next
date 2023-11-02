import React from "react";
import * as Styled from "./education.styles";

export const Education: React.FC = () => {
  return (
    <Styled.EducationWrapper>
      <p>what we do</p>
      <h1>
        At Classe365, We Revolutionize Education With Our Innovative Solutions
      </h1>
      <div>
        <img
          src={"./assets/images/aboutus/education.png"}
          alt="img"
          height={"auto"}
        />
        <span>
          Classe365 is designed to assist you in optimizing your education
          experience. We provide user-friendly tools that simplify student data
          management, course administration, and financial tasks for educational
          institutions of all sizes. Our suite of services includes a
          comprehensive SIS, a flexible LMS, and an innovative admission and CRM
          platform. These tools empower educators to navigate both traditional
          and online learning settings effortlessly. Classe365 is the solution
          for you to stay competitive, excel, and prosper in the modern
          educational world, where innovation and accessibility go hand in hand.
        </span>
      </div>
    </Styled.EducationWrapper>
  );
};
