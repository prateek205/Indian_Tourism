import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import tourismData from "../data/db";
import { Link } from "react-router-dom";

const Hero = () => {
  const [activeTitle, setActiveTitle] = useState("Assam Tourism");
  const [activeIndex, setActiveIndex] = useState(0);

  const tourism = tourismData.tourism;

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Swiper */}
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={tourism.length > 1}
        pagination={{ clickable: true }}
        className="h-screen"
        onSlideChange={(swiper) => {
          const currentIndex = swiper.realIndex;
          setActiveIndex(currentIndex);
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
              preload="metadata"
              className="w-full h-screen object-cover scale-100"
            >
              <source src={item.video} type="video/mp4" />
            </video>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20 z-10"></div>

      {/* Content */}
      <div className="absolute top-24 inset-0 z-10 flex items-center px-6 md:px-20">
        <div className="max-w-3xl backdrop-blur-sm bg-white/10 border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl">
          {/* Badge */}
          <span className="inline-block px-4 py-2 mb-5 rounded-full bg-orange-500/20 text-orange-300 border border-orange-400/30 text-sm tracking-widest uppercase">
            Incredible India
          </span>

          {/* Heading */}
          <h1 className="font-[Bebas_Neue] text-6xl md:text-8xl lg:text-[110px] leading-none tracking-wider uppercase">
            <span className="bg-gradient-to-r from-green-400 to-green-200 bg-clip-text text-transparent">
              Dekho
            </span>
            <br />
            <span className="text-white">Mera</span>{" "}
            <span className="text-orange-500">Desh</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-4 text-xl md:text-3xl italic text-orange-300 font-medium">
            Har Safar Ek Kahani
          </p>

          {/* Dynamic Place */}
          <div className="mt-6">
            <p className="text-gray-300 text-sm uppercase tracking-[4px]">
              Explore
            </p>

            <h2 className="text-2xl md:text-4xl font-bold text-white mt-1">
              {activeTitle}
            </h2>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-8">
            <Link to={`/details/${tourism[activeIndex]?.id}`}>
              <button className="group px-8 py-3 bg-orange-500 rounded-full text-lg font-medium transition-all duration-300 hover:bg-orange-600 hover:scale-105 shadow-lg">
                Explore Now
                <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                  →
                </span>
              </button>
            </Link>

            <button className="px-8 py-3 border border-white/30 rounded-full text-white hover:bg-white/10 transition">
              Watch Story
            </button>
          </div>

          {/* Slide Counter */}
          <div className="mt-8 text-white/70 text-sm">
            {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(tourism.length).padStart(2, "0")}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-7 h-12 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
