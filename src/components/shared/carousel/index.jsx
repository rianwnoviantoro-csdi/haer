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
      slidesPerView={4.7}
      mousewheel={true}
      slidesOffsetBefore={15}
      slidesOffsetAfter={15}
      spaceBetween={10}
      freeMode={true}
      modules={[FreeMode, Mousewheel]}
      className="my-6"
    >
      {children}
    </Swiper>
  );
}

export default Carousel;
