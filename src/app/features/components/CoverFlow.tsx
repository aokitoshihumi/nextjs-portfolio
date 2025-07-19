"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./style.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import { Images } from "../types";
import Image from "next/image";

export default function CoverFlow({ images }: { images: Images[] }) {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow]}
        className="max-w-[920px] mx-auto"
      >
        {images.map((image) => (
          <SwiperSlide 
          key={image.id}
          className="!w-[300px] !h-[200px] rounded-lg"
          >
            <Image
              src={image.images.url}
              alt={image.images.alt || "undefined"}
              width={300}
              height={300}
              className="rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
