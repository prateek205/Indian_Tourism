import React from "react";
import tourismData from "../data/db.js";
import { Link } from "react-router-dom";

const Destination = () => {
  const category = tourismData.category;

  return (
    <section className="p-5">
      <div className="text-center">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-green-300 bg-clip-text text-transparent uppercase">
          Destination
        </h1>

        <p className="text-xl py-5 text-white md:w-1/3 w-full m-auto">
          Discover breathtaking places across India — from snowy mountains and
          spiritual temples to tropical beaches and wildlife adventures.
        </p>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-8">
        {category.slice(0, 3).map((item) => (
          <div
            key={item.id}
            className="relative overflow-hidden rounded-xl cursor-pointer group"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-[350px] object-cover group-hover:scale-110 duration-500"
            />

            <div className="absolute inset-0 bg-black/40"></div>

            <div className="absolute bottom-5 left-5 z-10 flex flex-col gap-5">
              <h1 className="text-4xl text-white font-bold">{item.title}</h1>

              <Link to={`/category/${item.title}`}>
                <button className="bg-white/30 backdrop-blur-md px-4 py-2 rounded-full text-white hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-300 duration-300">
                  Explore Now
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="flex justify-center mt-10">
        <Link to="/category">
          <button className="px-8 py-3 rounded-full text-lg font-semibold bg-gradient-to-r from-orange-500 to-green-500 text-white hover:scale-105 duration-300 shadow-lg">
            View More Categories →
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Destination;
