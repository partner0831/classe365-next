import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { BsChevronDown, BsChevronRight } from "react-icons/bs";
import type * as Type from "@/types";
import * as Styled from "./navItem.styles";
import { headerLeftNavs } from "@/layouts/AppLayout/data";
import Image from "next/image";

export const NavItem: React.FC<Type.INavItemProps> = ({
  label,
  to,
  subMenu,
}) => {
  const router = useRouter();
  const [isActive, setIsActive] = useState("no-submenu");
  const [width, setWidth] = useState(0);
  const [hoveredMenu, setHoveredMenu] = useState("");
  const [isSubActive, setIsSubActive] = useState("no-submenu");
  const [megaMenu, setMegaMenu] = useState("");
  const wrapperRef = useRef<any>(null);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.addEventListener("resize", handleResize);
    };
  }, []);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    const handleClickOutside = (event: any) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsSubActive("no-submenu");
        setIsActive("no-submenu");
        setMegaMenu("");
      }
    };
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  // useEffect(() => {
  //   if (!megaMenu) {
  //     document.documentElement.style.overflow = "auto";
  //     document.documentElement.style.paddingRight = "0";
  //   } else {
  //     document.documentElement.style.overflow = "hidden";
  //     document.documentElement.style.paddingRight = "17px";
  //     window.scrollTo({ top: 0 });
  //   }
  // }, [megaMenu]);

  const handleNavClick = () => {
    if (subMenu) {
      if (width > 1024) {
        setMegaMenu((prev) => (prev === label ? "" : label));
      } else {
        setIsActive((prev) => {
          setIsSubActive("no-submenu");
          return prev === label ? "no-submenu" : label;
        });
      }
    } else {
      setIsActive("no-submenu");
      setIsSubActive("no-submenu");
      router.push(to);
    }
  };

  return (
    <Styled.NavItemWrapper
      ref={wrapperRef}
      onMouseEnter={subMenu ? handleNavClick : () => {}}
      onMouseLeave={subMenu ? handleNavClick : () => {}}
    >
      <Styled.NavLabel
        // onMouseLeave={subMenu ? handleNavClick : () => {}}
        onClick={handleNavClick}
      >
        <span>{label}</span>
        {subMenu && <BsChevronDown size={11} />}
      </Styled.NavLabel>
      {width <= 1024 ? (
        <Styled.SubMenuWrapper active={isActive === label ? "true" : undefined}>
          {subMenu?.map((item, key) => (
            <Styled.SubMenuItemWrapper
              key={key}
              onMouseEnter={() =>
                width > 1024
                  ? item.subMenu
                    ? setIsSubActive(item.label)
                    : null
                  : null
              }
              onMouseLeave={() => setIsSubActive("no-submenu")}
              onClick={() =>
                item.subMenu
                  ? width > 1024
                    ? {}
                    : setIsSubActive((prev) =>
                        prev === item.label ? "no-submenu" : item.label
                      )
                  : router.push(item.to)
              }
            >
              <span>{item.label}</span>
              {item.subMenu ? <BsChevronRight size={11} /> : null}
              <Styled.SubMenuWrapper
                active={isSubActive === item.label ? "true" : undefined}
                className="sub-menu"
              >
                {item?.subMenu?.map((item1: any, key1: number) => (
                  <Styled.SubMenuItemWrapper
                    key={key1}
                    onClick={() => (item1.subMenu ? {} : router.push(item1.to))}
                  >
                    {item1.label}
                  </Styled.SubMenuItemWrapper>
                ))}
              </Styled.SubMenuWrapper>
            </Styled.SubMenuItemWrapper>
          ))}
        </Styled.SubMenuWrapper>
      ) : (
        <Styled.MegaMenuWrapper className={megaMenu ? "open" : ""}>
          {megaMenu === "Solutions" && (
            <Styled.SolutionsMegaMenuWrapper>
              {headerLeftNavs
                .filter((f) => f.label === megaMenu)[0]
                .subMenu?.map((mItem: any, mKey) => (
                  <Styled.SolutionsMegaMenuGridItem key={mKey}>
                    <h1>{mItem.label}</h1>
                    {mItem?.subMenu.map((sItem: any, sKey: any) => (
                      <Styled.MegaMenuItemWrapper
                        key={sKey}
                        className={sItem.desc ? "" : "no-desc"}
                        onClick={() => {
                          setMegaMenu("");
                          router.push(sItem.to);
                        }}
                        onMouseEnter={() => setHoveredMenu(sItem.to)}
                        onMouseLeave={() => setHoveredMenu("")}
                      >
                        <div className="icon-wrapper">
                          {sItem.icon ? (
                            hoveredMenu === sItem.to ? (
                              sItem.hoverIcon
                            ) : (
                              sItem.icon
                            )
                          ) : (
                            <Image
                              src={sItem.image}
                              width={20}
                              height={20}
                              alt="image"
                            />
                          )}
                        </div>
                        <div className={`item-container`}>
                          <h3>{sItem.label}</h3>
                          <p>{sItem.desc}</p>
                        </div>
                      </Styled.MegaMenuItemWrapper>
                    ))}
                  </Styled.SolutionsMegaMenuGridItem>
                ))}
            </Styled.SolutionsMegaMenuWrapper>
          )}
          {megaMenu === "More" && (
            <Styled.MoreMegaMenuWrapper>
              <Styled.MoreMegaMenuGrid>
                {headerLeftNavs
                  .filter((f) => f.label === megaMenu)[0]
                  .subMenu?.map((mItem: any, mKey) => (
                    <Styled.SolutionsMegaMenuGridItem key={mKey}>
                      <h1>{mItem.label}</h1>
                      {mItem?.subMenu.map((sItem: any, sKey: any) => (
                        <Styled.MegaMenuItemWrapper
                          key={sKey}
                          className={sItem.desc ? "" : "no-desc"}
                          onClick={() => {
                            setMegaMenu("");
                            router.push(sItem.to);
                          }}
                          onMouseEnter={() => setHoveredMenu(sItem.to)}
                          onMouseLeave={() => setHoveredMenu("")}
                        >
                          <div className="icon-wrapper">
                            {sItem.icon ? (
                              hoveredMenu === sItem.to ? (
                                sItem.hoverIcon
                              ) : (
                                sItem.icon
                              )
                            ) : (
                              <Image
                                src={sItem.image}
                                width={20}
                                height={20}
                                alt="image"
                              />
                            )}
                          </div>
                          <div className={`item-container`}>
                            <h3>{sItem.label}</h3>
                            <p>{sItem.desc}</p>
                          </div>
                        </Styled.MegaMenuItemWrapper>
                      ))}
                    </Styled.SolutionsMegaMenuGridItem>
                  ))}
              </Styled.MoreMegaMenuGrid>
              <Styled.MoreMegaMenuGitaWrapper>
                <Styled.MoreMegaMenuROI onClick={() => router.push("/roi")}>
                  <div>
                    <h3>ROI Calculator</h3>
                    <p>
                      {
                        "We’ve developed a one-of-its-kind calculator exclusively for educational institutions."
                      }
                    </p>
                  </div>
                  <Image
                    src={"/assets/images/menu/roi.png"}
                    width={99}
                    height={90}
                    alt="roi"
                  />
                </Styled.MoreMegaMenuROI>
                <Styled.MoreMegaMenuPlaybook
                  onClick={() => router.push("/playbook")}
                >
                  <h3>Digital Transformation Playbook </h3>
                  <Image
                    src={"/assets/images/menu/playbook.png"}
                    width={186}
                    height={67}
                    alt="playbook"
                  />
                  <p>
                    Developed through intense research, this framework will help
                    you achieve 100% digital transformation at your institution
                  </p>
                </Styled.MoreMegaMenuPlaybook>
              </Styled.MoreMegaMenuGitaWrapper>
            </Styled.MoreMegaMenuWrapper>
          )}
        </Styled.MegaMenuWrapper>
      )}
    </Styled.NavItemWrapper>
  );
};
