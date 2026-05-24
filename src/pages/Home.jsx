import React from "react";
import Hero from "../components/Hero";
import Destination from "../components/Destination";
import PopularDesti from "../components/PopularDesti";

const Home = () => {
  return (
    <section>
      <div className="bg-gray-900 h-full">
        <Hero />
        <Destination/>
        <PopularDesti/>
      </div>
    </section>
  );
};

export default Home;
