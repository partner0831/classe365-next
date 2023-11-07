import React from "react";
import * as Styled from "./spotlight.styles";
import * as Comp from "@/components";
import { BsArrowRight } from "react-icons/bs";
import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { spotdata } from "./data";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
export const Spotlight: React.FC = () => {
  return (
    <Styled.SpotContainer>
      <Styled.SpotWrapper>
        <div>
          <h1>press</h1>
          <h2>Our Media Spotlight</h2>
          <h3>
            At Classe365, we are proud to be acknowledged for our dedication to
            transforming the learning process by the media. Check out our news
            highlights and keep following us for the latest updates on our
            journey to revolutionize education.
          </h3>
          <Comp.Button size="sm">
            <span>Download Press Kit</span>
            <BsArrowRight />
          </Comp.Button>
        </div>
      </Styled.SpotWrapper>
      <Styled.SwiperWrapper>
        <Styled.SwiperContainer>
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
            {spotdata.map((item, key) => (
              <SwiperSlide key={key}>
                <Comp.SportCard
                  logo={item.src}
                  content={item.content}
                  color={item.color}
                />
              </SwiperSlide>
            ))}

            {spotdata.map((item, key) => (
              <SwiperSlide key={key}>
                <Comp.SportCard
                  logo={item.src}
                  content={item.content}
                  color={item.color}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <Styled.CustomNavigator className="page-sport">
            <span className="prevS">
              <HiOutlineArrowLeft />
            </span>
            <span className="nextS">
              <HiOutlineArrowRight />
            </span>
          </Styled.CustomNavigator>
        </Styled.SwiperContainer>
      </Styled.SwiperWrapper>
    </Styled.SpotContainer>
  );
};
