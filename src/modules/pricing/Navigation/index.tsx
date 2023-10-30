import React, { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import * as Comp from "@/components";
import * as Data from "./data";
import * as Styled from "./navigation.styles";

export const Navigation: React.FC<React.HTMLAttributes<HTMLElement>> = ({
  children,
}) => {
  const { navs, sliderData } = Data;
  const [isSticky, setIsSticky] = useState(false);
  const [checked, setChecked] = useState(false);
  const [slider, setSlider] = useState(0);
  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    let navbarLinks = document.querySelectorAll("#navbar a");
    const scrollpos = window.scrollY;
    navbarLinks.forEach((link: any) => {
      let section = document.querySelector(link.hash);

      if (
        section.offsetTop <= scrollpos + 150 &&
        section.offsetTop + section.offsetHeight > scrollpos + 150
      ) {
        link.classList.add("active");
      } else {
        if (link.hash === "#core") {
          let section1: any = document.querySelector("#core1");
          if (
            section1?.offsetTop <= scrollpos + 150 &&
            section1?.offsetTop + section1?.offsetHeight > scrollpos + 150
          )
            link.classList.add("active");
          else link.classList.remove("active");
        } else {
          link.classList.remove("active");
        }
      }
    });

    if (window.innerWidth > 1024) {
      if (document.documentElement.scrollTop > 300) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    } else {
      const stickyNav = document.getElementById("sticky-navbar");

      if (stickyNav?.getBoundingClientRect().top === 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    }
  };

  return (
    <>
      <Styled.NavigationWrapper id="core">
        <h1>
          {
            "Choose the Perfect Plan for Your Institute with Classe365’s Flexible Modular Pricing Solution"
          }
        </h1>
        <p>
          Ranked 5th Best School Administration Software by Capterra - A Gartner
          Company
        </p>
      </Styled.NavigationWrapper>
      {/* <div id="core"></div> */}
      <Styled.NavigationContainer>
        <img src="/assets/images/nav-header.png" alt="Navbar Header" />
        <Styled.GradientBG />
        <Styled.MobileBlurNavWrapper id="sticky-navbar">
          <Styled.MobileNavMenuWrapper id="navbar">
            {navs.map((nav, index) => (
              <a key={index} href={"#" + nav.link}>
                {nav.label}
              </a>
            ))}
          </Styled.MobileNavMenuWrapper>
          <Styled.MobileNavContentWrapper>
            <Styled.MobileNavContainer className={isSticky ? "is-sticky" : ""}>
              <div>
                <h2>Select your student size</h2>
                <Styled.SwitchWrapper
                  onClick={handleChange}
                  className={isSticky ? "is-sticky" : ""}
                >
                  <span>Annually</span>
                  <span>Monthly</span>

                  <div className={checked ? "checked" : ""}>
                    {!checked ? "Annually" : "Monthly"}
                  </div>
                </Styled.SwitchWrapper>
              </div>
              <Styled.SliderWrapper className={isSticky ? "is-sticky" : ""}>
                {sliderData.map((item, index) => (
                  <div key={index} onClick={() => setSlider(index)}>
                    <p>{item.label}</p>
                    <span className={index === slider ? "active" : ""} />
                  </div>
                ))}
              </Styled.SliderWrapper>
              <h1>
                $50<span>/month</span>
              </h1>
              <Styled.StickyButton className={isSticky ? "is-sticky" : ""}>
                <Comp.Button
                  bg="#6772E5"
                  border="#6772E5"
                  font="#fff"
                  className="shadow"
                >
                  <span>Email This Quote</span>
                  <BsArrowRight />
                </Comp.Button>
              </Styled.StickyButton>
            </Styled.MobileNavContainer>
            <Styled.ButtonGroup className={isSticky ? "is-sticky" : ""}>
              <Comp.Button
                bg="#6772E5"
                border="#6772E5"
                font="#fff"
                className="shadow"
              >
                <span>Email This Quote</span>
                <BsArrowRight />
              </Comp.Button>
              <Comp.Button bg="transparent" border="#6772E5" font="#6772E5">
                Book a Demo
              </Comp.Button>
            </Styled.ButtonGroup>
          </Styled.MobileNavContentWrapper>
        </Styled.MobileBlurNavWrapper>
        <Styled.BlurNavigationWrapper
          className={isSticky ? "is-sticky" : ""}
          id="sticky-navbar"
        >
          <img src="/assets/images/nav-header.png" alt="Navbar Header" />
          <Styled.NavItems id="navbar">
            {navs.map((nav, index) => (
              <Styled.NavItemWrapper href={"#" + nav.link} key={index}>
                {nav.label}
              </Styled.NavItemWrapper>
            ))}
          </Styled.NavItems>
          <Styled.NavContentWrapper className={isSticky ? "is-sticky" : ""}>
            <Styled.SwitchWrapper
              onClick={handleChange}
              className={isSticky ? "is-sticky" : ""}
            >
              <span>Annually</span>
              <span>Monthly</span>

              <div className={checked ? "checked" : ""}>
                {!checked ? "Annually" : "Monthly"}
              </div>
            </Styled.SwitchWrapper>
            <h2>Select your student size</h2>
            <Styled.SliderWrapper>
              {sliderData.map((item, index) => (
                <div key={index} onClick={() => setSlider(index)}>
                  <p>{item.label}</p>
                  <span className={index === slider ? "active" : ""} />
                </div>
              ))}
            </Styled.SliderWrapper>
            <div>
              <h1>
                $50<span>/month</span>
              </h1>
              <Styled.ButtonGroup>
                <Comp.Button
                  bg="#6772E5"
                  border="#6772E5"
                  font="#fff"
                  className="shadow"
                >
                  <span>Email This Quote</span>
                  <BsArrowRight />
                </Comp.Button>
                <Comp.Button
                  bg="transparent"
                  border="#6772E5"
                  font="#6772E5"
                  className={isSticky ? "is-sticky" : ""}
                >
                  Book a Demo
                </Comp.Button>
              </Styled.ButtonGroup>
            </div>
          </Styled.NavContentWrapper>
        </Styled.BlurNavigationWrapper>
        {children}
      </Styled.NavigationContainer>
    </>
  );
};
