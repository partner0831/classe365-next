import React, { useState, useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";
import { STRAPI_API } from "@/config";
import * as Styled from "./experience.styles";
import * as Data from "./data";
import Lottie from "react-lottie";
import * as lottie1 from "./data1.json";
import * as lottie2 from "./data2.json";
import * as lottie3 from "./data3.json";
import { Trusted } from "@/modules/solution/institutes";

const lottieData = [lottie2, lottie1, lottie3];

type Props = {
  title: string;
  data: {
    subtitle: string;
    icon: any;
    color: string;
    title: string;
    lottie?: any;
    text: string;
  }[];
};

const { experiences } = Data;
export const Experience: React.FC<Props> = ({ data = experiences, title }) => {
  const [isStopped, setIsStopped] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleScroll = () => {
    let navbarLinks = document.querySelectorAll("#experience-navbar a");
    const scrollpos = window.scrollY;

    if (window.innerWidth > 768) {
      navbarLinks.forEach((link: any) => {
        let section = document.querySelector(link.hash);

        if (
          section?.getBoundingClientRect().top + window.scrollY <=
            scrollpos + window.innerHeight / 2 &&
          section?.getBoundingClientRect().top +
            window.scrollY +
            section.offsetHeight >
            scrollpos + window.innerHeight / 2
        ) {
          // console.log("1111", link.hash);
          link.classList.add("active");
        } else {
          // console.log("2222", link.hash);
          link.classList.remove("active");
        }
      });
    }
  };
  return (
    <Styled.ExperienceSectionWrapper>
      <Styled.TitleWrapper>
        <h1>{title}</h1>
      </Styled.TitleWrapper>
      <div className="trusted">
        <Trusted />
      </div>
      <div>
        <Styled.ImageWrapper id="experience-navbar">
          {data?.map((_, key) => (
            <a
              href={`#experience-${key}`}
              key={key}
              className={key === 0 ? "active" : ""}
            >
              <Lottie
                options={{
                  loop: true,
                  autoplay: true,
                  animationData: lottieData[key],
                  rendererSettings: {
                    preserveAspectRatio: "xMidYMid slice",
                  },
                }}
                height={400}
                width={400}
                isStopped={isStopped}
                isPaused={isPaused}
              />
            </a>
          ))}
        </Styled.ImageWrapper>
        <Styled.ExperienceContentWrapper>
          {data?.map((row, index) => (
            <Styled.ExperienceItemWrapper
              key={index}
              color={row.color}
              id={"experience-" + index}
            >
              <h3 style={{ color: row.color }}>{row.subtitle}</h3>
              {/* {row.icon} */}
              <img
                src={row.icon.url ? STRAPI_API + row.icon?.url : row.icon}
                alt=""
              />
              <h2>{row.title}</h2>
              <p>{row.text}</p>
              <h4>
                Try it Free <BsArrowRight />
              </h4>
              <div className="lottie-wrapper">
                <Lottie
                  options={{
                    loop: true,
                    autoplay: true,
                    animationData: lottieData[index],
                    rendererSettings: {
                      preserveAspectRatio: "xMidYMid slice",
                    },
                  }}
                  height={400}
                  width={400}
                  isStopped={isStopped}
                  isPaused={isPaused}
                />
              </div>
            </Styled.ExperienceItemWrapper>
          ))}
        </Styled.ExperienceContentWrapper>
      </div>
    </Styled.ExperienceSectionWrapper>
  );
};
