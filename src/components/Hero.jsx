import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import tourism from "../data/db.js";

const Hero = () => {
  const [activeTitle, setActiveTitle] = useState("Assam Tourism");

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Swiper */}
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{ clickable: true }}
        className="h-screen"
        onSlideChange={(swiper) => {
          const currentIndex = swiper.realIndex;

          setActiveTitle(tourism[currentIndex].title);
        }}
      >
        {tourism.map((item) => (
          <SwiperSlide key={item.id}>
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-screen object-cover"
            >
              <source src={item.video} type="video/mp4" />
            </video>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Fixed Content */}
      <div className="absolute top-0 left-0 z-20 flex flex-col justify-center items-start h-full px-6 md:px-16 text-white">
        {/* Main Heading */}
        <h1 className="font-[Bebas_Neue] text-6xl md:text-8xl lg:text-[120px] tracking-wider uppercase bg-gradient-to-r from-green-400 to-green-200 bg-clip-text text-transparent">
          Dekho <span className="text-white">Mera</span>{" "}
          <span className="text-orange-500">Desh</span>
        </h1>

        {/* Stylish Subtitle */}
        <p className="mt-4 text-2xl md:text-4xl italic text-orange-400 font-semibold tracking-wide">
          Har Safar Ek Kahani
        </p>

        {/* Dynamic Tourism Title */}
        <p className="mt-6 text-lg md:text-2xl text-gray-200">{activeTitle}</p>

        {/* Button */}
        <button className="mt-8 px-8 py-3 bg-orange-500 hover:bg-orange-600 rounded-full text-lg transition">
          Explore Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
