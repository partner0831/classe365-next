import React from "react";
import * as Comp from "@/components";
import * as Styled from "./slider.styles";
import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { slidata } from "./data";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";

export const Slider: React.FC = () => {
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
        loop
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
        <span className="prevS">
          <HiOutlineArrowLeft />
        </span>
        <span className="nextS">
          <HiOutlineArrowRight />
        </span>
      </Styled.CustomNavigator>
    </Styled.SliderWrapper>
  );
};
