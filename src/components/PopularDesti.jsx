import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Navigation, Pagination } from "swiper/modules";

import { FaLocationDot, FaStar } from "react-icons/fa6";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const PopularDesti = () => {
  const destination = [
    {
      id: 24,
      location: "Jammu & Kashmir",
      heading: "Kashmir",
      image:
        "https://images.unsplash.com/photo-1643449415972-87d4cfe882a1?w=600&auto=format&fit=crop&q=60",
      rating: "4.9",
    },

    {
      id: 25,
      location: "Western India",
      heading: "Goa",
      image:
        "https://images.unsplash.com/photo-1642922835816-e2ac68db5c42?w=600&auto=format&fit=crop&q=60",
      rating: "4.2",
    },

    {
      id: 26,
      location: "South India",
      heading: "Kerala",
      image: "https://images.unsplash.com/photo-1519046904884-53103b34b206",
      rating: "4.6",
    },

    {
      id: 27,
      heading: "Rajasthan",
      location: "Northwest India",
      image: "https://images.unsplash.com/photo-1477587458883-47145ed94245",
      rating: "4.7",
    },

    {
      id: 28,
      heading: "Meghalaya",
      location: "Northeast India",
      image:
        "https://images.unsplash.com/photo-1552978534-9d01e1f91517?w=600&auto=format&fit=crop&q=60",
      rating: "4.8",
    },

    {
      id: 29,
      heading: "Varanasi",
      location: "Uttar Pradesh",
      image:
        "https://images.unsplash.com/photo-1706186839147-0d708602587b?w=600&auto=format&fit=crop&q=60",
      rating: "4.6",
    },
  ];



  return (
    <section className="w-full bg-gray-900 text-white py-20 px-5 md:px-16 overflow-hidden">
      {/* Heading */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-5 mb-14">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold mt-3 bg-gradient-to-r from-orange-400 to-green-400 bg-clip-text text-transparent">
            Popular Destinations
          </h1>
        </div>

        <button className="px-7 py-3 rounded-full bg-gradient-to-r from-orange-500 to-orange-300 hover:scale-105 duration-300">
          View More
        </button>
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        navigation={false}
        pagination={{ clickable: false }}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },

          768: {
            slidesPerView: 2,
          },

          1024: {
            slidesPerView: 3,
          },
        }}
        className="pb-14"
      >
        {destination.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <div className="relative h-[550px] overflow-hidden rounded-[30px] group cursor-pointer">
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.heading}
                  className="w-full h-full object-cover group-hover:scale-110 duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

                {/* Rating */}
                <div className="absolute top-5 right-5 z-20 flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                  <FaStar className="text-yellow-400" />
                  <span className="text-white font-semibold">
                    {item.rating}
                  </span>
                </div>

                {/* Content */}
                <div className="absolute bottom-6 left-5 z-30 flex flex-col gap-3">
                  {/* Location */}
                  <p className="flex items-center gap-2 text-orange-400">
                    <FaLocationDot />
                    {item.location}
                  </p>

                  {/* Title */}
                  <h1 className="text-4xl md:text-5xl font-bold text-white">
                    {item.heading}
                  </h1>

                  {/* Description */}
                  <p className="text-gray-300 max-w-sm leading-7">
                    Discover breathtaking landscapes, rich culture, heritage,
                    and unforgettable travel experiences.
                  </p>

                  {/* Button */}
                  <button className="w-fit mt-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-gradient-to-r from-orange-500 to-orange-300 duration-300">
                    Explore Now
                  </button>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default PopularDesti;
