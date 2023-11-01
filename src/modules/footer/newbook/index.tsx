import React from "react";
import { BsArrowRight } from "react-icons/bs";
import * as Comp from "@/components";

import * as Styled from "./newbook.styles";
import Marquee from "react-fast-marquee";

export const NewBook: React.FC = () => {
  return (
    <Styled.NewBookWrapper>
      <Styled.NewBookSectionWrapper>
        <Styled.NewBookContainer>
          <Styled.NewBookTextWrapper>
            <h3>Trusted by 5500+ educational institutions in 130 countries</h3>
            <div>
              <Comp.Button bg="#F1F6FA" border="#F1F6FA" font="#393C59">
                <span>Try For Free</span>
                <BsArrowRight />
              </Comp.Button>
              <Comp.Button bg="transparent" border="#F1F6FA" font="#F1F6FA">
                Book a Demo
              </Comp.Button>
            </div>
          </Styled.NewBookTextWrapper>
        </Styled.NewBookContainer>
        <Styled.NewBookImageWrapper>
          <div className="marquee">
            {/* <div className="track"> */}
            <Marquee speed={100}>
              {[
                {
                  src: "/assets/images/trusted/1.png",
                  height: "48.978px",
                  width: "67.815px",
                },
                {
                  src: "/assets/images/trusted/2.png",
                  width: "52.745px",
                  height: "52.745px",
                },
                {
                  src: "/assets/images/trusted/3.png",
                  width: "80.374px",
                  height: "60.28px",
                },
                {
                  src: "/assets/images/trusted/4.png",
                  width: "112.732px",
                  height: "62.338px",
                },
                {
                  src: "/assets/images/trusted/5.png",
                  height: "28.705px",
                  width: "97.858px",
                },
                {
                  src: "/assets/images/trusted/6.png",
                  height: "50.133px",
                  width: "130.346px",
                },
              ].map((item, key) => (
                <img
                  src={item.src}
                  key={key}
                  alt=""
                  width={item.width}
                  height={item.height}
                />
              ))}
            </Marquee>
            {/* </div> */}
          </div>
        </Styled.NewBookImageWrapper>
      </Styled.NewBookSectionWrapper>
      <img src="/assets/images/shapes/CRM.png" alt="" className="shape-1" />
      <img src="/assets/images/shapes/LMS.png" alt="" className="shape-2" />
      <img src="/assets/images/shapes/Add-ons.png" alt="" className="shape-3" />
      <img
        src="/assets/images/shapes/E-commerce.png"
        alt=""
        className="shape-4"
      />
    </Styled.NewBookWrapper>
  );
};
