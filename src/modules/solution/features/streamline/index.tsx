import React, { useState, useEffect } from "react";
import { STRAPI_API } from "@/config";
import * as Styled from "./streamline.styles";

type Props = {
  title: string;
  description: string;
  data: {
    title: string;
    description: string;
    image: any;
  }[];
};

export const Streamline: React.FC<Props> = ({ data, description, title }) => {
  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleScroll = () => {
    let navbarLinks = document.querySelectorAll("#streamline-navbar a");
    const scrollpos = window.scrollY;
    if (window.innerWidth > 768) {
      navbarLinks.forEach((link: any) => {
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
    <Styled.StreamlineWrapper>
      <h1>{title}</h1>
      <p>{description}</p>
      <Styled.StreamlineStickyWrapper>
        <Styled.StreamlineImageWrapper id="streamline-navbar">
          {data?.map((item, key) => (
            <a
              href={`#streamline-${key}`}
              key={key}
              className={key === 0 ? "active" : ""}
            >
              <img src={STRAPI_API + item.image?.url} alt="" />
            </a>
          ))}
        </Styled.StreamlineImageWrapper>
        <Styled.StreamlineTextWrapper id="asdfasdfasdf">
          {data?.map((row, index) => (
            <div key={index} id={"streamline-" + index}>
              <h1>{row.title}</h1>
              <p>{row.description}</p>
              <img src={STRAPI_API + row.image?.url} alt="" />
            </div>
          ))}
        </Styled.StreamlineTextWrapper>
      </Styled.StreamlineStickyWrapper>
    </Styled.StreamlineWrapper>
  );
};
