import React from "react";
import { BsArrowRight } from "react-icons/bs";
import * as Comp from "@/components";
import * as Styled from "./landing.styles";

type Props = {
  subtitle: string;
  subtitleColor: string;
  title: string[];
  spanColor: string;
  description: string;
};

const imgs = [
  "/assets/images/trusted/1.png",
  "/assets/images/trusted/2.png",
  "/assets/images/trusted/3.png",
  "/assets/images/trusted/4.png",
  "/assets/images/trusted/5.png",
  "/assets/images/trusted/6.png",
];

export const Landing: React.FC<Props> = ({
  description,
  spanColor,
  subtitle,
  subtitleColor,
  title,
}) => {
  return (
    <Styled.LandingSectionWrapper>
      <h4 style={{ color: subtitleColor }}>{subtitle}</h4>
      {title && (
        <h1>
          {title[0]}
          <span style={{ color: spanColor }}>{title[1]}</span>
          {title[2]}
        </h1>
      )}
      <p>{description}</p>
      <Styled.ButtonWrapper>
        <Comp.Button
          bg="#6772E5"
          border="#6772E5"
          font="#E1E1E1"
          className="shadow"
        >
          <span>Try For Free</span>
          <BsArrowRight />
        </Comp.Button>
        <Comp.Button bg="transparent" border="#6772E5" font="#6772E5">
          Book a Demo
        </Comp.Button>
      </Styled.ButtonWrapper>
      <Styled.ImageWrapper>
        {imgs.map((img, index) => (
          <div key={index}>
            <img src={img} alt="" />
          </div>
        ))}
      </Styled.ImageWrapper>
    </Styled.LandingSectionWrapper>
  );
};
