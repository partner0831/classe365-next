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
            <img src={img.src} alt="" width={img.width} />
          </div>
        ))}
      </Styled.ImageWrapper>
    </Styled.LandingSectionWrapper>
  );
};
