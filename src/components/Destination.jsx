import React from "react";

const Destination = () => {
  const category = [
    {
      id: 18,
      title: "Mountain",
      image:
        "https://images.unsplash.com/photo-1741836315165-89e7dfd61613?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1vdW50YWluJTIwaW4lMjBpbmRpYXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 19,
      title: "Beach",
      image:
        "https://images.unsplash.com/photo-1559671888-af88d0c275bd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJlYWNoJTIwaW4lMjBpbmRpYXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 20,
      title: "Spiritual",
      image:
        "https://plus.unsplash.com/premium_photo-1697730355701-06a022eb69cd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fHNwaXJpdHVhbCUyMGluJTIwaW5kaWF8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 21,
      title: "WildLife",
      image:
        "https://images.unsplash.com/photo-1589657429197-ecba47e3acd8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdpbGRsaWZlJTIwaW4lMjBpbmRpYXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 22,
      title: "Adventure",
      image:
        "https://images.unsplash.com/photo-1769963608832-cc25836772e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFkdmVudHVyZSUyMGluJTIwaW5kaWF8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 23,
      title: "Heritage",
      image:
        "https://plus.unsplash.com/premium_photo-1661904509551-6570836702e8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGVyaXRhZ2UlMjBpbiUyMGluZGlhfGVufDB8fDB8fHww",
    },
  ];

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
              <div className="absolute bottom-5 left-5 z-50 flex flex-col gap-5">
                <h1 className="text-4xl text-white font-bold">{item.title}</h1>
                <button className=" bg-white/20 backdrop:blur-3xl px-3 py-2 rounded-full hover:bg-gradient-to-r from-orange-500 to-orange-300 duration-300">
                  Explore Now
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Destination;
