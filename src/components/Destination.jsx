import React from "react";
import tourismData from "../data/db.js";
import { Link } from "react-router-dom";

const Destination = () => {
  const category = tourismData.category;

  return (
    <section className="relative py-20 px-5 bg-gradient-to-b from-slate-950 via-slate-900 to-black overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-14">
        <span className="px-4 py-2 rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/30 text-sm uppercase tracking-widest">
          Explore India
        </span>

        <h1 className="mt-5 text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-500 via-white to-green-500 bg-clip-text text-transparent uppercase">
          Top Destinations
        </h1>

        <p className="text-gray-300 text-lg md:w-2/4 mx-auto mt-5 leading-relaxed">
          Discover breathtaking places across India — from snowy mountains,
          spiritual temples and royal palaces to tropical beaches and wildlife
          adventures.
        </p>
      </div>

      {/* Cards */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {category.slice(0, 3).map((item) => (
          <div
            key={item.id}
            className="group relative h-[450px] overflow-hidden rounded-3xl shadow-2xl cursor-pointer"
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

            {/* Animated Border */}
            <div className="absolute inset-0 border border-white/10 rounded-3xl group-hover:border-orange-400/50 transition duration-500"></div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
              <span className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-white text-xs tracking-widest uppercase">
                Destination
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 group-hover:text-orange-400 transition">
                {item.title}
              </h2>

              <p className="text-gray-300 mt-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                Explore the beauty and culture of {item.title}.
              </p>

              <Link to={`/categoryDetails/${item.title}`}>
                <button className="mt-5 px-6 py-3 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 text-white hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-400 transition-all duration-300 hover:scale-105">
                  Explore Now →
                </button>
              </Link>
            </div>

            {/* Top Badge */}
            <div className="absolute top-5 right-5 z-10">
              <div className="bg-black/40 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm">
                Popular
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View More */}
      <div className="flex justify-center mt-14">
        <Link to="/category">
          <button className="group px-10 py-4 rounded-full bg-gradient-to-r from-orange-500 to-green-500 text-white text-lg font-semibold shadow-xl hover:scale-105 transition duration-300">
            View All Categories
            <span className="inline-block ml-2 group-hover:translate-x-2 transition">
              →
            </span>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Destination;
