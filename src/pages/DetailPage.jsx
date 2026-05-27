import React from "react";
import tourismData from "../data/db";
import { useParams } from "react-router-dom";

const DetailPage = () => {
  const { id } = useParams();

  const data = [
    ...tourismData.tourism,
    ...tourismData.category,
    ...tourismData.destination,
    ...tourismData.india,
  ];

  const detail = data.find((item) => item.id === Number(id));

  return (
    <section className="relative w-full h-screen">
      <div className="absolute inset-0 z-10 bg-black/50"></div>
      {detail.image ? (
        <img src={detail.image} alt="" className="w-full h-1/2 object-cover" />
      ) : (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-[500px] object-cover"
          src={detail.details.videos}
        ></video>
      )}
      <div className="absolute top-96 left-5 z-20 text-white text-8xl">
        {detail.title || detail.heading}
      </div>
    </section>
  );
};

export default DetailPage;
