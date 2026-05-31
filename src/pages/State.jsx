import React, { useState } from "react";
import { FaFilter } from "react-icons/fa6";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import tourismData from "../data/db";
import { Link } from "react-router-dom";

const State = () => {
  return (
    <section className="w-full min-h-screen bg-black relative">
      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 px-5 md:px-10 py-32">
        {tourismData.tourism.map((item) => {
          return (
            <div
              key={item.id}
              className="relative overflow-hidden rounded-3xl group h-[450px] shadow-lg"
            >
              {/* Video */}
              <video
                src={item.video}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover group-hover:scale-110 duration-500"
              ></video>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 p-6 text-white z-10">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  {item.title}
                </h1>
                <Link to={`/details/${item.id}`}>
                  <button className="mt-4 px-5 py-2 border border-white rounded-full hover:bg-white hover:text-black duration-300">
                    Explore
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default State;
