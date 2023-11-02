import React from "react";
import * as Styled from "./spotlight.styles";
import * as Comp from "@/components";
import { BsArrowRight } from "react-icons/bs";
import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { spotdata } from "./data";
export const Spotlight: React.FC = () => {
  return (
    <Styled.SpotContainer>
      <Styled.SpotWrapper>
        <div>
          <h1>careers</h1>
          <h2>Join the Team</h2>
          <h3>
            As per the Financial Times, Classe365 is among the rapidly expanding
            companies in Asia Pacific, and we have even more ambitious plans for
            the future. Explore our current job openings and send in your
            resume. We eagerly await your response!
          </h3>
          <Comp.Button size="sm">
            <span>Download Press Kit</span>
            <BsArrowRight />
          </Comp.Button>
        </div>
      </Styled.SpotWrapper>
      <Styled.SwiperContainer>
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
          modules={[Pagination, Navigation]}
          className="mySwiper"
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
        </Swiper>
      </Styled.SwiperContainer>
    </Styled.SpotContainer>
  );
};
