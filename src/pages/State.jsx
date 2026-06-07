import React, { useState } from "react";
import { FaFilter } from "react-icons/fa6";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import tourismData from "../data/db";
import { Link } from "react-router-dom";

const State = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-slate-950 via-black to-slate-900 py-28 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-green-500/10 blur-[120px] rounded-full"></div>

      {/* Heading */}
      <div className="text-center mb-16 px-5">
        <span className="px-4 py-2 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400 text-sm uppercase tracking-widest">
          Incredible India
        </span>

        <h1 className="mt-5 text-5xl md:text-7xl font-bold bg-gradient-to-r from-orange-500 via-white to-green-500 bg-clip-text text-transparent">
          Explore India
        </h1>

        <p className="mt-5 text-gray-400 max-w-2xl mx-auto">
          Discover majestic mountains, royal palaces, spiritual destinations,
          beaches, deserts, and unforgettable adventures across India.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-5 md:px-10 lg:px-20">
        {tourismData.tourism.map((item) => (
          <div
            key={item.id}
            className="group relative h-[500px] overflow-hidden rounded-[32px] cursor-pointer shadow-2xl"
          >
            {/* Video */}
            <img
              src={item.images}
              alt={item.name}
              className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

            {/* Hover Glow */}
            <div className="absolute inset-0 bg-orange-500/0 group-hover:bg-orange-500/10 transition duration-500"></div>

            {/* Top Badge */}
            <div className="absolute top-5 left-5 z-20">
              <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm">
                Tourist Place
              </span>
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-8 z-30">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 backdrop-blur-md text-orange-300 text-sm border border-orange-400/30">
                📍 India
              </div>

              <h2 className="mt-5 text-4xl md:text-5xl font-bold text-white group-hover:text-orange-400 transition">
                {item.title}
              </h2>

              <p className="mt-3 text-gray-300 leading-7 opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                Experience breathtaking landscapes, rich heritage, local
                culture, and unforgettable journeys.
              </p>

              <Link to={`/details/${item.id}`}>
                <button className="mt-6 px-7 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-gradient-to-r hover:from-orange-500 hover:to-green-500 hover:scale-105 transition-all duration-300">
                  Explore Destination →
                </button>
              </Link>
            </div>

            {/* Border Effect */}
            <div className="absolute inset-0 rounded-[32px] border border-white/10 group-hover:border-orange-400/40 transition duration-500"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default State;
