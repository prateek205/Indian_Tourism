import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import tourismData from "../data/db"

import "swiper/css";
import "swiper/css/pagination";

const Festivals = () => {
  const festivals = tourismData.festival;

  return (
    <section className="relative py-24 px-5 md:px-16 bg-gradient-to-b from-slate-950 via-slate-900 to-black overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/10 blur-[150px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-500/10 blur-[150px] rounded-full"></div>

      {/* Header */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between mb-16 gap-6">
        <div>
          <span className="px-4 py-2 rounded-full bg-orange-500/20 border border-orange-400/30 text-orange-400 text-sm uppercase tracking-widest">
            Cultural Heritage
          </span>

          <h1 className="mt-4 text-5xl md:text-7xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-orange-400 via-yellow-300 to-green-400 bg-clip-text text-transparent">
              Popular Festivals
            </span>
          </h1>

          <p className="text-gray-400 mt-4 max-w-xl leading-7">
            Experience India's colorful traditions, music, dance, spirituality,
            and celebrations that bring millions together every year.
          </p>
        </div>

        <Link to="/festival">
          <button className="group px-8 py-3 rounded-full bg-gradient-to-r from-orange-500 to-orange-300 text-white shadow-lg hover:scale-105 transition duration-300">
            View All Festivals
            <span className="inline-block ml-2 group-hover:translate-x-2 transition">
              →
            </span>
          </button>
        </Link>
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={25}
        slidesPerView={1}
        centeredSlides={false}
        grabCursor={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },

          768: {
            slidesPerView: 2,
          },

          1024: {
            slidesPerView: 3,
          },
        }}
        className="relative z-10 pb-16"
      >
        {festivals.slice(0, 6).map((item) => (
          <SwiperSlide key={item.id}>
            <div className="group relative h-[580px] overflow-hidden rounded-[32px] cursor-pointer shadow-2xl">
              {/* Image */}
              <img
                src={item.image}
                alt={item.heading}
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

              {/* Hover Glow */}
              <div className="absolute inset-0 bg-orange-500/0 group-hover:bg-orange-500/10 transition duration-500"></div>

              {/* Festival Badge */}
              <div className="absolute top-5 left-5 z-20">
                <span className="px-4 py-2 rounded-full bg-orange-500/20 backdrop-blur-md border border-orange-400/30 text-orange-300 text-sm">
                  Festival
                </span>
              </div>

              {/* Rating */}
              <div className="absolute top-5 right-5 z-20 flex items-center gap-2 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                <FaStar className="text-yellow-400" />
                <span className="text-white font-semibold">{item.rating}</span>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 z-30">
                {/* State */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-orange-400 text-sm border border-white/10">
                  <FaLocationDot />
                  {item.state}
                </div>

                {/* Title */}
                <h2 className="mt-5 text-3xl md:text-4xl font-bold text-white group-hover:text-orange-400 transition duration-300">
                  {item.heading}
                </h2>

                {/* Description */}
                <p className="mt-4 text-gray-300 leading-7 opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  Celebrate traditions, vibrant colors, local cuisine, cultural
                  performances, and unforgettable moments.
                </p>

                {/* Button */}
                <Link to={`/festivalDetails/${item.id}`}>
                  <button className="mt-6 px-7 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-gradient-to-r hover:from-orange-500 hover:to-yellow-400 hover:scale-105 transition-all duration-300">
                    Explore Festival →
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Festivals;
