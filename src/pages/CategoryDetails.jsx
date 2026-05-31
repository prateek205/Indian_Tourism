import React from "react";
import { useParams, Link } from "react-router-dom";
import tourismData from "../data/db";

const CategoryDetail = () => {
  const { title } = useParams();

  const category = tourismData.category.find(
    (item) => item.title.toLowerCase() === title.toLowerCase(),
  );

  if (!category) {
    return (
      <div className="h-screen flex items-center justify-center text-4xl font-bold">
        Category Not Found
      </div>
    );
  }

  const relatedStates = tourismData.tourism.filter((tour) =>
    category.details.famousStates.some((state) =>
      tour.title
        .toLowerCase()
        .includes(
          typeof state === "string"
            ? state.toLowerCase()
            : state.name.toLowerCase(),
        ),
    ),
  );

  return (
    <section className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="relative h-[60vh]">
        <img
          src={category.image}
          alt={category.title}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="absolute bottom-10 left-10 text-white z-10">
          <h1 className="text-6xl font-bold">{category.title}</h1>

          <p className="text-xl mt-3 max-w-3xl">
            {category.details.description}
          </p>
        </div>
      </div>

      {/* Famous States */}
      <div className="max-w-7xl mx-auto py-16 px-5">
        <h2 className="text-4xl font-bold mb-10 text-center">Famous States</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {category.details.famousStates.map((state, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <img
                src={state.image}
                alt={state.name}
                className="w-full h-64 object-cover"
              />

              <div className="p-5">
                <h3 className="text-2xl font-bold mb-3">{state.name}</h3>

                <p className="text-gray-600">{state.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Famous Places */}
        <h2 className="text-4xl font-bold mb-10 text-center">Famous Places</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {category.details.famousPlaces.map((place, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <img
                src={place.image}
                alt={place.name}
                className="w-full h-64 object-cover"
              />

              <div className="p-5">
                <h3 className="text-2xl font-bold mb-3">📍 {place.name}</h3>

                <p className="text-gray-600">{place.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Activities */}
        <h2 className="text-4xl font-bold mb-10 text-center">Activities</h2>

        <div className="flex flex-wrap justify-center gap-4 mb-20">
          {category.details.activities.map((activity, index) => (
            <span
              key={index}
              className="bg-purple-100 text-purple-700 px-5 py-3 rounded-full text-lg"
            >
              🎯 {activity}
            </span>
          ))}
        </div>

        {/* Related Destinations */}
        <h2 className="text-4xl font-bold mb-10 text-center">
          Related Destinations
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedStates.map((item) => (
            <Link
              key={item.id}
              to={`/details/${item.id}`}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <video autoPlay muted loop className="w-full h-60 object-cover">
                <source src={item.video} type="video/mp4" />
              </video>

              <div className="p-5">
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>

                <p className="text-gray-600">{item.details.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryDetail;
