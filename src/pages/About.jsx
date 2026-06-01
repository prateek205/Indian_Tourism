import React from "react";

const About = () => {
  return (
    <section className="relative py-32 px-5 md:px-10 bg-gradient-to-b from-black via-slate-950 to-black overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/10 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-500/10 blur-[150px] rounded-full"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Image Side */}
        <div className="relative group">
          <img
            src="https://images.unsplash.com/photo-1598091383021-15ddea10925d"
            alt="India"
            className="rounded-[40px] h-[650px] w-full object-cover shadow-2xl group-hover:scale-[1.02] transition duration-700"
          />

          <div className="absolute inset-0 rounded-[40px] bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

          <div className="absolute bottom-8 left-8">
            <h3 className="text-white text-4xl font-bold">Incredible India</h3>

            <p className="text-gray-300 mt-2">
              Every destination tells a story
            </p>
          </div>
        </div>

        {/* Content Side */}
        <div>
          <span className="px-4 py-2 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400 uppercase tracking-widest text-sm">
            Our Mission
          </span>

          <h2 className="mt-6 text-5xl md:text-6xl font-bold leading-tight">
            Connecting Travelers With
            <span className="block bg-gradient-to-r from-orange-500 to-green-500 bg-clip-text text-transparent">
              India's Wonders
            </span>
          </h2>

          <p className="mt-8 text-gray-400 leading-8 text-lg">
            From the snow-capped Himalayas to the golden deserts of Rajasthan,
            from Kerala's backwaters to the spiritual ghats of Varanasi, India
            offers experiences unlike anywhere else on earth.
          </p>

          <p className="mt-5 text-gray-400 leading-8 text-lg">
            Our platform helps travelers discover destinations, festivals,
            traditions, cuisines, and adventures that showcase the true spirit
            of India.
          </p>

          {/* Features */}
          <div className="grid grid-cols-2 gap-5 mt-10">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <h3 className="text-3xl">🏔️</h3>
              <p className="mt-3 font-semibold">Mountains & Nature</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <h3 className="text-3xl">🏰</h3>
              <p className="mt-3 font-semibold">Heritage Sites</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <h3 className="text-3xl">🎉</h3>
              <p className="mt-3 font-semibold">Festivals</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <h3 className="text-3xl">🍛</h3>
              <p className="mt-3 font-semibold">Local Cuisine</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
