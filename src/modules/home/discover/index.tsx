import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { HiOutlineArrowRight, HiOutlineArrowLeft } from "react-icons/hi";
import * as Comp from "@/components";
import * as Data from "./data";
import * as Styled from "./discover.styles";

export const Discover: React.FC<{ bg?: string }> = ({ bg }) => {
  const { discovers } = Data;

  return (
    <Styled.DiscoverWrapper style={{ background: bg ? bg : "transparent" }}>
      <Styled.DiscoverContainer>
        <div>
          <Comp.DiscoverIcon />
          <h2>
            Discover Why Our Customers Love Classe365 - In Their Own Words
          </h2>
          <p>
            Hear what all the buzz is about! Check out what our customers have
            to say about Classe365 - awarded the best SIS solution by EdTech
            Awards for 3 consecutive years
          </p>
          <Styled.CustomNavigator>
            <span className="prev">
              <HiOutlineArrowLeft />
            </span>
            <span className="next">
              <HiOutlineArrowRight />
            </span>
          </Styled.CustomNavigator>
        </div>
      </Styled.DiscoverContainer>
      <Styled.DiscoverSliderWrapper bg={bg}>
        <div>
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={30}
            pagination={{
              enabled: true,
            }}
            navigation={{
              prevEl: ".prev",
              nextEl: ".next",
            }}
            loop
            dir={"rtl"}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {discovers.map((row, index) => (
              <SwiperSlide key={index}>
                <Comp.DiscoverCard {...row} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Styled.DiscoverSliderWrapper>
    </Styled.DiscoverWrapper>
  );
};
