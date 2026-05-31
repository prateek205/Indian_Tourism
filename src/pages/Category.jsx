import React from "react";
import tourismData from "../data/db";
import { Link } from "react-router-dom";

const CategoryPage = () => {
  return (
    <section className="min-h-screen bg-gray-100 py-10 px-5">
      {/* Categories Section */}
      <div className="mb-20">
        <h1 className="text-5xl font-bold text-center mb-10">
          Explore Categories
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {tourismData.category.map((item) => (
            <Link
              key={item.id}
              to={`/categoryDetails/${item.title}`}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover"
              />

              <div className="p-5">
                <h2 className="text-3xl font-bold mb-3">
                  {item.title}
                </h2>

                <p className="text-gray-600 line-clamp-3">
                  {item.details.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Festivals Section */}
      <div>
        <h1 className="text-5xl font-bold text-center mb-10">
          Famous Festivals
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {tourismData.festival.map((item) => (
            <Link
              key={item.id}
              to={`/festivalDetails/${item.id}`}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.heading}
                className="w-full h-64 object-cover"
              />

              <div className="p-5">
                <h2 className="text-3xl font-bold mb-3">
                  {item.heading}
                </h2>

                <p className="text-gray-600 mb-2">
                  📍 {item.state}
                </p>

                <p className="text-gray-600 line-clamp-3">
                  {item.details.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryPage;