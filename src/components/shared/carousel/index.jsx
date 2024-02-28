import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FreeMode, Mousewheel } from "swiper/modules";

function Carousel({ children }) {
  return (
    <Swiper
      centeredSlides={false}
      slidesPerView={4.5}
      mousewheel={true}
      slidesOffsetBefore={15}
      slidesOffsetAfter={15}
      spaceBetween={15}
      freeMode={true}
      modules={[FreeMode, Mousewheel]}
      className="my-6"
    >
      {children}
    </Swiper>
  );
}

export default Carousel;
