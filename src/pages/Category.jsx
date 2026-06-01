import React from "react";
import tourismData from "../data/db";
import { Link } from "react-router-dom";

const CategoryPage = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-slate-950 via-black to-slate-900 py-24 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-orange-500/10 blur-[140px] rounded-full"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-green-500/10 blur-[140px] rounded-full"></div>

      {/* ================= Categories ================= */}

      <div className="relative z-10 mb-28 px-5 md:px-10">
        <div className="text-center mb-14">
          <span className="px-4 py-2 rounded-full bg-orange-500/20 border border-orange-400/30 text-orange-400 uppercase text-sm tracking-widest">
            Travel Categories
          </span>

          <h1 className="mt-5 text-5xl md:text-7xl font-bold bg-gradient-to-r from-orange-500 via-white to-green-500 bg-clip-text text-transparent">
            Explore Categories
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto mt-5">
            Discover mountains, beaches, heritage sites, wildlife adventures,
            spiritual journeys and unforgettable destinations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {tourismData.category.map((item) => (
            <Link
              key={item.id}
              to={`/categoryDetails/${item.title}`}
              className="group relative overflow-hidden rounded-[30px] h-[450px]"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

              {/* Border */}
              <div className="absolute inset-0 border border-white/10 rounded-[30px] group-hover:border-orange-400/40 transition"></div>

              {/* Content */}
              <div className="absolute bottom-0 p-6 z-20">
                <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-white text-sm">
                  Category
                </span>

                <h2 className="mt-4 text-4xl font-bold text-white group-hover:text-orange-400 transition">
                  {item.title}
                </h2>

                <p className="mt-3 text-gray-300 opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  {item.details.description.slice(0, 80)}...
                </p>

                <button className="mt-5 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-gradient-to-r hover:from-orange-500 hover:to-green-500 transition">
                  Explore →
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* ================= Festivals ================= */}

      <div className="relative z-10 px-5 md:px-10">
        <div className="text-center mb-14">
          <span className="px-4 py-2 rounded-full bg-orange-500/20 border border-orange-400/30 text-orange-400 uppercase text-sm tracking-widest">
            Cultural Heritage
          </span>

          <h1 className="mt-5 text-5xl md:text-7xl font-bold bg-gradient-to-r from-orange-500 via-yellow-300 to-green-500 bg-clip-text text-transparent">
            Famous Festivals
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto mt-5">
            Experience the vibrant traditions, celebrations, music, dance and
            culture that make India truly incredible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {tourismData.festival.map((item) => (
            <Link
              key={item.id}
              to={`/festivalDetails/${item.id}`}
              className="group relative overflow-hidden rounded-[30px] h-[500px]"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.heading}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

              {/* Border */}
              <div className="absolute inset-0 border border-white/10 rounded-[30px] group-hover:border-orange-400/40 transition"></div>

              {/* Rating */}
              <div className="absolute top-5 right-5 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full text-white">
                ⭐ {item.rating}
              </div>

              {/* Content */}
              <div className="absolute bottom-0 p-6 z-20">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 backdrop-blur-md text-orange-300 text-sm">
                  📍 {item.state}
                </span>

                <h2 className="mt-4 text-4xl font-bold text-white group-hover:text-orange-400 transition">
                  {item.heading}
                </h2>

                <p className="mt-3 text-gray-300 opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  {item.details.description.slice(0, 90)}...
                </p>

                <button className="mt-5 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-gradient-to-r hover:from-orange-500 hover:to-yellow-400 transition">
                  Explore Festival →
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryPage;
