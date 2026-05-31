import React from "react";
import { useParams } from "react-router-dom";
import tourismData from "../data/db";
import { FaLocationDot } from "react-icons/fa6";

const FestivalDetail = () => {
  const { id } = useParams();

  const festival = tourismData.festival.find((item) => item.id === Number(id));

  if (!festival) {
    return (
      <div className="h-screen flex items-center justify-center text-4xl font-bold">
        Festival Not Found
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="relative h-[80vh]">
        <img
          src={festival.image}
          alt={festival.heading}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="absolute bottom-10 left-10 text-white z-10">
          <p className="flex items-center gap-2 text-orange-400 text-xl mb-3">
            <FaLocationDot />
            {festival.state}
          </p>

          <h1 className="text-6xl font-bold">{festival.heading}</h1>

          <p className="text-xl mt-4 max-w-3xl">
            {festival.details.description}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-5 py-16">
        {/* Description */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-10">
          <h2 className="text-3xl font-bold text-orange-600 mb-4">
            About Festival
          </h2>

          <p className="text-lg text-gray-700">
            {festival.details.description}
          </p>
        </div>

        {/* Best Time */}
        <div className="bg-green-50 rounded-2xl shadow-lg p-8 mb-10">
          <h2 className="text-3xl font-bold text-green-700 mb-4">
            Best Time To Visit
          </h2>

          <p className="text-xl">🌤️ {festival.details.bestTime}</p>
        </div>

        {/* Famous Places */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-8">Famous Places</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {festival.details.famousPlaces.map((place, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg"
              >
                <img
                  src={place.image}
                  alt={place.name}
                  className="w-full h-56 object-cover"
                />

                <div className="p-5">
                  <h3 className="text-2xl font-bold">{place.name}</h3>

                  <p className="text-gray-600 mt-2">{place.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Food */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-8">Traditional Food</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {festival.details.food.map((food, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg"
              >
                <img
                  src={food.image}
                  alt={food.name}
                  className="w-full h-56 object-cover"
                />

                <div className="p-5">
                  <h3 className="text-2xl font-bold">🍛 {food.name}</h3>

                  <p className="text-gray-600 mt-2">{food.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Activities */}
        <div>
          <h2 className="text-4xl font-bold mb-8">Activities</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {festival.details.activities.map((activity, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg"
              >
                <img
                  src={activity.image}
                  alt={activity.name}
                  className="w-full h-56 object-cover"
                />

                <div className="p-5">
                  <h3 className="text-2xl font-bold">🎉 {activity.name}</h3>

                  <p className="text-gray-600 mt-2">{activity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 bg-gradient-to-r from-orange-500 to-red-500 text-white p-10 rounded-3xl text-center">
          <h2 className="text-5xl font-bold mb-4">
            Celebrate {festival.heading}
          </h2>

          <p className="text-xl">
            Experience the culture, traditions, food, and festivities of India.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FestivalDetail;
