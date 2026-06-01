import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="fixed top-0 left-0 w-full z-50">
      <nav className="mx-3 md:mx-8 mt-3">
        <div className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl">
          <div className="flex items-center justify-between px-5 md:px-8 lg:px-12 h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img
                src="./images/nav-logo.png"
                alt="logo"
                className="w-16 md:w-20 object-contain"
              />

              <div className="hidden md:block ml-2">
                <h1 className="text-xl font-bold bg-gradient-to-r from-orange-400 to-green-400 bg-clip-text text-transparent">
                  Dekho Mera Desh
                </h1>
              </div>
            </Link>

            {/* Desktop Menu */}
            <ul className="hidden md:flex items-center gap-10 font-medium text-white">
              <Link to="/" className="relative group">
                Home
                <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-orange-400 group-hover:w-full transition-all duration-300"></span>
              </Link>

              <Link to="/state" className="relative group">
                States
                <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-orange-400 group-hover:w-full transition-all duration-300"></span>
              </Link>

              <Link to="/category" className="relative group">
                Categories
                <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-orange-400 group-hover:w-full transition-all duration-300"></span>
              </Link>

              <Link to="/about" className="relative group">
                About
                <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-orange-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </ul>

            {/* CTA + Mobile Menu */}
            <div className="flex items-center gap-4">
              <Link to="/state" className="hidden lg:block">
                <button className="px-6 py-2 rounded-full bg-gradient-to-r from-orange-500 to-green-500 text-white font-medium hover:scale-105 transition duration-300 shadow-lg">
                  Explore India
                </button>
              </Link>

              {/* Mobile Toggle */}
              <button
                className="md:hidden text-3xl text-white"
                onClick={() => setOpen(!open)}
              >
                {open ? <HiX /> : <HiMenuAlt3 />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            open ? "max-h-[400px] opacity-100 mt-3" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
            <ul className="flex flex-col gap-6 text-center text-lg font-medium">
              <Link
                to="/"
                onClick={() => setOpen(false)}
                className="hover:text-orange-400 transition"
              >
                Home
              </Link>

              <Link
                to="/state"
                onClick={() => setOpen(false)}
                className="hover:text-orange-400 transition"
              >
                States
              </Link>

              <Link
                to="/category"
                onClick={() => setOpen(false)}
                className="hover:text-orange-400 transition"
              >
                Categories
              </Link>

              <Link
                to="/about"
                onClick={() => setOpen(false)}
                className="hover:text-orange-400 transition"
              >
                About
              </Link>

              <Link to="/state" onClick={() => setOpen(false)}>
                <button className="w-full py-3 rounded-full bg-gradient-to-r from-orange-500 to-green-500">
                  Explore India
                </button>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
