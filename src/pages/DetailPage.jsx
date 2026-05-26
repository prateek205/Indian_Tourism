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

  const details = data.find((item) => item.id === id);

  return (
    <section className="w-full h-screen">
      {details.image ? (
        <img
          src={details.image}
          alt=""
          className="w-full h-full object-cover"
        />
      ) : (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          src={details.video}
        ></video>
      )}
    </section>
  );
};

export default DetailPage;
