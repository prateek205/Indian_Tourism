import React from "react";
import tourismData from "../data/db.js";
import { Link } from "react-router-dom";

const Destination = () => {
  const category = tourismData.category

  return (
    <section className="p-5">
      <div className="text-center">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-green-300 bg-clip-text text-transparent uppercase">
          destination
        </h1>
        <p className="text-xl py-5 text-white w-1/3 m-auto">
          Discover breathtaking places across India — from snowy mountains and
          spiritual temples to tropical beaches and wildlife adventures.
        </p>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-8">
        {category.map((item, index) => {
          return (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl cursor-pointer"
            >
              <img
                src={item.image}
                alt=""
                className="w-full h-full object-cover hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute bottom-5 left-5 z-10 flex flex-col gap-5">
                <h1 className="text-4xl text-white font-bold">{item.title}</h1>
                <Link to={`/details/${item.id}`}>
                  <button className=" bg-white/30 backdrop-blur-3xl px-3 py-2 rounded-full hover:bg-gradient-to-r from-orange-500 to-orange-300 duration-300">
                    Explore Now
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

export default Destination;
