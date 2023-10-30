import React from "react";
import { BsArrowRight } from "react-icons/bs";
import * as Styled from "./landing.styles";
import { useRouter } from "next/router";
import { AppLogoWhiteSVG } from "@/components/SVGs/logo";

export const Landing: React.FC = () => {
  const router = useRouter();
  return (
    <Styled.LandingWrapper>
      <Styled.LandingWaveAnim>
        <div className="wave"></div>
        <div className="wave"></div>
      </Styled.LandingWaveAnim>
      <Styled.LandingLogo onClick={() => router.push("/")}>
        <AppLogoWhiteSVG />
      </Styled.LandingLogo>
      <Styled.TitleWrapper>
        <h1>Classe365 Live Webinars</h1>
        <p>
          Join our product experts every week to watch a live webinar of our
          student management system demo, we’ll provide you with a full rundown
          of the platform.
        </p>
      </Styled.TitleWrapper>
      <Styled.LandingGrid>
        <Styled.LandingGridItem>
          <div>
            <h5>New & Existing Customers</h5>
            <h1>Live Product Webinar</h1>
            <p>
              If you are already a customer, get full end to end training on
              setup and administration
            </p>
          </div>
          <div>
            <h3>With Nandan Keerthi</h3>
            <h4>2:00 pm EST</h4>
            <p>Check in your local time</p>
            <button>
              <span>Register Now</span>
              <BsArrowRight />
            </button>
          </div>
        </Styled.LandingGridItem>
        <Styled.LandingGridItem>
          <div>
            <h5>New & Existing Customers</h5>
            <h1>Live Product Insight & Demo</h1>
            <p>
              Learn how Classe365 can help streamline your student
              administration process, learning management systems and increase
              enrollment.
            </p>
          </div>
          <div>
            <h3>With Nandan Keerthi</h3>
            <h4>2:00 pm EST</h4>
            <p>Check in your local time</p>
            <button>
              <span>Register Now</span>
              <BsArrowRight />
            </button>
          </div>
        </Styled.LandingGridItem>
      </Styled.LandingGrid>
    </Styled.LandingWrapper>
  );
};
