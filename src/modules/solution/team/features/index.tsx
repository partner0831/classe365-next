import React, { useState, useEffect } from "react";
import { BsCheck } from "react-icons/bs";
import { STRAPI_API } from "@/config";
import * as Styled from "./features.styles";

type Props = {
  title: string;
  description: string;
  data: {
    title: string;
    description: string;
    image: any;
    bullets?: any[];
  }[];
  bullets?: { title: string; description: string }[];
};

export const Features: React.FC<Props> = ({
  data,
  description,
  title,
  bullets,
}) => {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleScroll = () => {
    setWidth(window.innerWidth);
    let navbarLinks = document.querySelectorAll("#feature-navbar a");
    const scrollpos = window.scrollY;
    if (window.innerWidth > 768) {
      navbarLinks.forEach((link: any) => {
        console.log(link.hash);
        let section = document.querySelector(link.hash);
        if (
          section.offsetTop <= scrollpos + window.innerHeight / 2 &&
          section.offsetTop + section.offsetHeight >
            scrollpos + window.innerHeight / 2
        ) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    }
  };
  return (
    <Styled.FeaturesWrapper>
      <Styled.FeatureTitleWrapper>
        <h5>Features</h5>
        <div>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </Styled.FeatureTitleWrapper>
      <Styled.FeatureContainer>
        <Styled.FeatureListWrapper>
          {data?.map((item, key) => (
            <Styled.FeatureListIteam key={key} id={`team-feature${key}`}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div>
                <img src={item.image} alt="" />
              </div>
              <span>
                {item.bullets?.map((bullet, index) => (
                  <p key={index}>
                    <BsCheck color="#4ED163" />{" "}
                    {bullets?.filter((f: any) => f?.id === bullet)[0].title}
                  </p>
                ))}
              </span>
            </Styled.FeatureListIteam>
          ))}
        </Styled.FeatureListWrapper>
        <Styled.FeatureImageWrapper id="feature-navbar">
          {data?.map((item, key) => (
            <a
              href={`#team-feature${key}`}
              key={key}
              className={key === 0 ? "active" : ""}
            >
              <img src={STRAPI_API + item.image?.url} alt="" />
            </a>
          ))}
        </Styled.FeatureImageWrapper>
      </Styled.FeatureContainer>
    </Styled.FeaturesWrapper>
  );
};
