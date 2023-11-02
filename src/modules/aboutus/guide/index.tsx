import React from "react";
import * as Styled from "./guide.styles";
import { StickIcon } from "@/components";
import { guideData } from "./data";
export const Guide: React.FC = () => {
  return (
    <Styled.GuideWrapper>
      <p>Our Guiding Principles</p>
      <div>
        <Styled.GuideView>
          <StickIcon />
          <Styled.GuideContent>
            <h1>{guideData[0].title[0]}</h1>
            <h2>{guideData[0].content}</h2>
          </Styled.GuideContent>
        </Styled.GuideView>
        <Styled.GuideView>
          <StickIcon />
          <Styled.GuideContent>
            <h1>{guideData[1].title[0]}</h1>
            <h1>{guideData[1].title[1]}</h1>
            <h2>{guideData[1].content}</h2>
          </Styled.GuideContent>
        </Styled.GuideView>
        <div className="empty"></div>
        <div className="empty"></div>
        <Styled.GuideView>
          <StickIcon />
          <Styled.GuideContent>
            <h1>{guideData[2].title[0]}</h1>
            <h1>{guideData[2].title[1]}</h1>
            <h2>{guideData[2].content}</h2>
          </Styled.GuideContent>
        </Styled.GuideView>
        <Styled.GuideView>
          <StickIcon />
          <Styled.GuideContent>
            <h1>{guideData[3].title[0]}</h1>
            <h2>{guideData[3].content}</h2>
          </Styled.GuideContent>
        </Styled.GuideView>
      </div>
      <img
        src={"/assets/images/shapes/Donations.png"}
        alt="icon"
        width={63}
        className="about-star"
      />
      <img
        src={"/assets/images/shapes/Add-ons.png"}
        alt="icon"
        width={63}
        className="about-donation"
      />
    </Styled.GuideWrapper>
  );
};
