import React from "react";
import { useParams } from "react-router-dom";
import tourismData from "../data/db";

const DetailPage = () => {
  const { id } = useParams();

  const data = [
    ...tourismData.tourism,
  ];

  const detail = data.find((item) => item.id === Number(id));

  if (!detail) {
    return (
      <div className="h-screen flex items-center justify-center text-3xl font-bold">
        Data Not Found
      </div>
    );
  }

  return (
    <section className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10"></div>

        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src={detail.details?.videos || detail.video}
            type="video/mp4"
          />
        </video>

        <div className="absolute bottom-20 left-8 md:left-16 z-20 text-white max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            {detail.title || detail.heading}
          </h1>

          <div className="flex flex-wrap gap-3 mb-5">
            {detail.category?.map((cat, index) => (
              <span
                key={index}
                className="bg-cyan-600 px-4 py-2 rounded-full text-sm font-medium"
              >
                {cat}
              </span>
            ))}
          </div>

          <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
            {detail.details.description}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-5 py-16">
        {/* Best Time */}
        <div className="bg-green-50 rounded-2xl p-8 shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-green-700 mb-4">
            Best Time To Visit
          </h2>

          <p className="text-xl">🌤️ {detail.details.bestTime}</p>
        </div>

        {/* Famous Places */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-cyan-700 mb-10">
            Famous Places
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {detail.details.famousPlaces.map((place, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <img
                  src={place.image}
                  alt={place.name}
                  className="w-full h-64 object-cover"
                />

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">📍 {place.name}</h3>

                  <p className="text-gray-600 leading-relaxed">
                    {place.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Food Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-orange-600 mb-10">
            Famous Food
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {detail.details.food.map((food, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <img
                  src={food.image}
                  alt={food.name}
                  className="w-full h-64 object-cover"
                />

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">🍽️ {food.name}</h3>

                  <p className="text-gray-600 leading-relaxed">
                    {food.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Activities */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-purple-600 mb-10">
            Activities
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {detail.details.activities.map((activity, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <img
                  src={activity.image}
                  alt={activity.name}
                  className="w-full h-64 object-cover"
                />

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">
                    🎯 {activity.name}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {activity.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-cyan-600 to-blue-700 rounded-3xl text-white p-10 text-center shadow-xl">
          <h2 className="text-4xl font-bold mb-4">
            Explore {detail.title || detail.heading}
          </h2>

          <p className="text-lg max-w-3xl mx-auto">
            Discover breathtaking destinations, delicious local cuisine,
            exciting adventures, and unforgettable cultural experiences.
          </p>

          <button className="mt-6 bg-white text-cyan-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
            Plan Your Trip
          </button>
        </div>
      </div>
    </section>
  );
};

export default DetailPage;
