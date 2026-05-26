import React, { useState } from "react";
import { FaFilter } from "react-icons/fa6";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import tourismData from "../data/db";
import { Link } from "react-router-dom";

const State = () => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  // Filter Data
  const filterData = tourismData.india.filter(
    (item) =>
      tourismData.india &&
      item.heading.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <section className="w-full min-h-screen bg-black relative">
      {/* Sidebar Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed top-28 left-5 z-50 bg-white text-black p-3 rounded-full text-3xl shadow-lg"
      >
        <FaFilter />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-[300px] bg-black/95 backdrop-blur-md z-50 p-5 duration-500 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-white text-2xl font-bold">Search</h1>

          <button
            onClick={() => setOpen(false)}
            className="text-white text-4xl"
          >
            <HiX />
          </button>
        </div>

        {/* Search Input */}
        <input
          type="text"
          placeholder="Search State..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-3 rounded-xl outline-none bg-white/10 border border-gray-600 text-white placeholder:text-gray-400 focus:border-cyan-400"
        />

        {/* Search Result Names */}
        <div className="mt-8 flex flex-col gap-4">
          {filterData.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setSearch(item.heading);
                setOpen(false);
              }}
              className="text-left text-white hover:text-cyan-400 duration-300 border-b border-gray-700 pb-2"
            >
              {item.heading}
            </button>
          ))}
        </div>
      </div>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/50 z-40"
        ></div>
      )}

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 px-5 md:px-10 py-32">
        {filterData.map((item) => {
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
                <p className="text-sm uppercase tracking-[3px] text-orange-300 mb-2">
                  {item.category}
                </p>

                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  {item.heading}
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
