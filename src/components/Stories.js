"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Stories() {
  return (
    <Swiper spaceBetween={10} slidesPerView={4}>
      {[1,2,3,4,5].map((item) => (
        <SwiperSlide key={item}>
          <div className="story-card">
            <img src={`https://i.pravatar.cc/150?img=${item}`} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
