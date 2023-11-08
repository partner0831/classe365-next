import React, { useState } from "react";
import * as Comp from "@/components";
import * as Styled from "./slider.styles";
import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { slidata } from "./data";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";

export const Slider: React.FC = () => {
  const [active, setActive] = useState(0);

  return (
    <Styled.SliderWrapper>
      <Swiper
        slidesPerView={"auto"}
        pagination={{
          enabled: true,
        }}
        navigation={{
          prevEl: ".prevS",
          nextEl: ".nextS",
        }}
        modules={[Pagination, Navigation]}
        breakpoints={{
          425: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        onSlideChange={(swiper) => {
          setActive(swiper.activeIndex);
        }}
      >
        {slidata.map((item, key) => (
          <SwiperSlide key={key}>
            <Comp.ReviewCard
              header={item.title}
              content1={item.content1}
              content2={item.content2}
              name={item.name}
              role={item.role}
              pos={item.pos}
              color={item.color}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Styled.CustomNavigator>
        <Styled.SliderPointer
          className="prevS"
          border={active === 0 ? "active" : "normal"}
        >
          <HiOutlineArrowLeft color={active === 0 ? "#DBDBDB" : "#6772e5"} />
        </Styled.SliderPointer>
        <Styled.SliderPointer className="nextS">
          <HiOutlineArrowRight />
        </Styled.SliderPointer>
      </Styled.CustomNavigator>
    </Styled.SliderWrapper>
  );
};
