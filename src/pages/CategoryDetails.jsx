import React from "react";
import { useParams, Link } from "react-router-dom";
import tourismData from "../data/db";

const CategoryDetail = () => {
  const { title } = useParams();

  const category = tourismData.category.find((item) => item.title === title);

  const relatedStates = tourismData.tourism.filter((tour) =>
    category.details.famousStates.some((state) =>
      tour.title.toLowerCase().includes(state.toLowerCase()),
    ),
  );

  return (
    <section className="min-h-screen bg-gray-100">
      {/* Category Banner */}
      <div className="relative h-[60vh]">
        <img
          src={category.image}
          alt={category.title}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="absolute bottom-10 left-10 text-white">
          <h1 className="text-6xl font-bold">{category.title}</h1>

          <p className="text-xl mt-3 max-w-3xl">
            {category.details.description}
          </p>
        </div>
      </div>

      {/* Related Tourism */}
      <div className="max-w-7xl mx-auto py-12 px-5">
        <h2 className="text-4xl font-bold mb-10">Related Destinations</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedStates.map((item) => (
            <Link
              key={item.id}
              to={`/details/${item.id}`}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition"
            >
              <video autoPlay muted loop className="w-full h-60 object-cover">
                <source src={item.video} type="video/mp4" />
              </video>

              <div className="p-5">
                <h3 className="text-2xl font-bold">{item.title}</h3>

                <p className="text-gray-600 mt-2">{item.details.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryDetail;
