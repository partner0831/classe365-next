import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { BsArrowRight } from "react-icons/bs";
import { STRAPI_API } from "@/config";
import * as Styled from "./recommended.styles";

type Props = {
  title: string;
  tabs: any[];
  data: any[];
  bg?: string;
  titleColor?: string;
  textColor?: string;
  contentColor?: string;
  tabStyle?: boolean;
};

export const Recommended: React.FC<Props> = ({
  data,
  tabs,
  title,
  bg,
  titleColor,
  textColor,
  contentColor,
  tabStyle,
}) => {
  const [selected, setSelected] = useState("");
  useEffect(() => {
    if (tabs?.length > 0) {
      setSelected(tabs[0].id);
    }
  }, [tabs]);
  return (
    <Styled.RecommendedWrapper style={{ background: bg ? bg : "#6772e5" }}>
      <Styled.RecommendedContainer>
        <h1 style={{ color: titleColor ? titleColor : "#fff" }}>{title}</h1>
        <Styled.InsititutionSwiper>
          {data?.length > 0 && (
            <Swiper
              slidesPerView={"auto"}
              spaceBetween={20}
              pagination={{
                enabled: true,
              }}
              loop
              modules={[Pagination]}
              className="mySwiper"
            >
              {data?.map((row, index) => (
                <SwiperSlide key={index}>
                  <Styled.InstitutionSwiperItemWrapper>
                    <h3 style={{ color: contentColor ? contentColor : "#fff" }}>
                      {tabs[index].label}
                    </h3>
                    <Styled.RecommededInfoWrapper>
                      <img
                        src={STRAPI_API + row?.icon?.url}
                        alt=""
                        style={{ marginTop: "37px" }}
                      />
                      <Styled.RecommendedImageWrapper>
                        <img
                          src={
                            row?.image?.url
                              ? STRAPI_API + row?.image?.url
                              : row.image
                          }
                          alt=""
                        />
                      </Styled.RecommendedImageWrapper>

                      <p style={{ color: textColor ? textColor : "#fff" }}>
                        {row?.description}
                      </p>
                      <a
                        href={row?.link}
                        style={{ color: textColor ? "#6772E5" : "#fff" }}
                      >
                        Set Up a Private Demo <BsArrowRight />
                      </a>
                    </Styled.RecommededInfoWrapper>
                    {/* <div className="image-wrapper">
                      <img
                        src={
                          row?.image?.url
                            ? STRAPI_API + row?.image?.url
                            : row.image
                        }
                        alt=""
                      />
                    </div> */}
                    {/* <div className="info-wrapper">
                    <h1>{row.amount}</h1>
                    <span>{row.desc}</span>
                  </div> */}
                  </Styled.InstitutionSwiperItemWrapper>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </Styled.InsititutionSwiper>
        <Styled.RecommendedTabWrapper tabStyle={tabStyle}>
          {tabs?.map((tab: any, index: number) => (
            <span
              key={index}
              onClick={() => setSelected(tab?.id)}
              className={selected === tab?.id ? "active" : ""}
            >
              {tab?.label}
            </span>
          ))}
        </Styled.RecommendedTabWrapper>
        {data?.map((item, key) => (
          <Styled.RecommendedTabContent
            key={key}
            className={item.tab === selected ? "show" : ""}
          >
            <Styled.RecommededInfoWrapper>
              <img src={STRAPI_API + item?.icon?.url} alt="" />
              <p style={{ color: textColor ? textColor : "#fff" }}>
                {item?.description}
              </p>
              <a
                href={item?.link}
                style={{ color: textColor ? "#6772E5" : "#fff" }}
              >
                Set Up a Private Demo <BsArrowRight />
              </a>
            </Styled.RecommededInfoWrapper>
            <Styled.RecommendedImageWrapper>
              <img src={STRAPI_API + item?.image?.url} alt="" />
            </Styled.RecommendedImageWrapper>
          </Styled.RecommendedTabContent>
        ))}
      </Styled.RecommendedContainer>
    </Styled.RecommendedWrapper>
  );
};
