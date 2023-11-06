import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { AiOutlineRight } from "react-icons/ai";
import * as Styled from "./videos.styles";
import * as Data from "./data";

export const Videos: React.FC = () => {
  const { videoData } = Data;
  const [active, setActive] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);

  const handleVideoPlay = (id: string) => {
    const video: any = document.getElementById(id);
    video?.play();
  };
  const [swiper, setSwiper] = useState<any | null>(null);
  return (
    <Styled.VideosWrapper>
      <h1>On-Demand Videos</h1>
      <div>
        <Styled.VideoTabWrapper>
          {videoData.map((item, key) => (
            <Styled.VideoTabItem
              onClick={() => setActive(key)}
              key={key}
              active={active === key ? "true" : undefined}
            >
              <h3>
                <b>{item.title}</b>
                <span>
                  <AiOutlineRight />
                </span>
              </h3>
              <div>
                {item.data.map((item1, key1) => (
                  <p
                    key={key1}
                    className={slideIndex === key1 ? "active" : ""}
                    onClick={() => {
                      swiper.slideTo(key1);
                    }}
                  >
                    <span>
                      <AiOutlineRight size={12} />
                    </span>
                    <span>{item1.title}</span>
                  </p>
                ))}
                <div>
                  <Swiper
                    spaceBetween={30}
                    navigation={true}
                    pagination={{
                      clickable: true,
                    }}
                    onSlideChange={(e) => setSlideIndex(e.realIndex)}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                    onSwiper={setSwiper}
                  >
                    {videoData[active].data.map((video, key) => (
                      <SwiperSlide key={key}>
                        <Styled.VideoSliderItem>
                          <div>
                            <h3>{video.title}</h3>
                            <button
                              onClick={() =>
                                handleVideoPlay(`demo-video-${active}-${key}`)
                              }
                            >
                              Watch Now
                            </button>
                          </div>
                          <video
                            id={`demo-video-${active}-${key}`}
                            src={video.video}
                          ></video>
                        </Styled.VideoSliderItem>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </Styled.VideoTabItem>
          ))}
        </Styled.VideoTabWrapper>
        <Styled.VideoSliderWrapper>
          <Swiper
            spaceBetween={30}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            onSlideChange={(e) => setSlideIndex(e.realIndex)}
            modules={[Pagination, Navigation]}
            className="mySwiper"
            onSwiper={setSwiper}
          >
            {videoData[active].data.map((video, key) => (
              <SwiperSlide key={key}>
                <Styled.VideoSliderItem>
                  <div>
                    <h3>{video.title}</h3>
                    <button
                      onClick={() =>
                        handleVideoPlay(`demo-video-${active}-${key}`)
                      }
                    >
                      Watch Now
                    </button>
                  </div>
                  <video
                    id={`demo-video-${active}-${key}`}
                    src={video.video}
                  ></video>
                </Styled.VideoSliderItem>
              </SwiperSlide>
            ))}
          </Swiper>
        </Styled.VideoSliderWrapper>
      </div>
    </Styled.VideosWrapper>
  );
};
