import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="fixed top-0 left-0 w-full z-50">
      <nav className="mx-3 md:mx-8 mt-3">
        <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl">
          {/* Navbar */}
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
            <ul className="hidden md:flex items-center gap-10 text-white font-medium">
              <li>
                <Link to="/" className="relative group">
                  Home
                  <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-orange-400 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>

              <li>
                <Link to="/state" className="relative group">
                  States
                  <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-orange-400 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>

              <li>
                <Link to="/category" className="relative group">
                  Categories
                  <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-orange-400 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>

              <li>
                <Link to="/about" className="relative group">
                  About
                  <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-orange-400 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
            </ul>

            {/* Right Side */}
            <div className="flex items-center gap-4">
              {/* Desktop Button */}
              <Link to="/state" className="hidden lg:block">
                <button className="px-6 py-2 rounded-full bg-gradient-to-r from-orange-500 to-green-500 text-white font-medium hover:scale-105 transition duration-300 shadow-lg">
                  Explore India
                </button>
              </Link>

              {/* Mobile Toggle */}
              <button
                onClick={() => setOpen(!open)}
                className="md:hidden text-white text-3xl"
              >
                {open ? <HiX /> : <HiMenuAlt3 />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            open ? "max-h-[500px] opacity-100 mt-3" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-black/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl">
            <ul className="flex flex-col items-center py-4">
              <li className="w-full">
                <Link
                  to="/"
                  onClick={() => setOpen(false)}
                  className="block w-full text-center py-4 text-white text-lg font-medium hover:text-orange-400 transition duration-300"
                >
                  Home
                </Link>
              </li>

              <li className="w-full border-t border-white/10">
                <Link
                  to="/state"
                  onClick={() => setOpen(false)}
                  className="block w-full text-center py-4 text-white text-lg font-medium hover:text-orange-400 transition duration-300"
                >
                  States
                </Link>
              </li>

              <li className="w-full border-t border-white/10">
                <Link
                  to="/category"
                  onClick={() => setOpen(false)}
                  className="block w-full text-center py-4 text-white text-lg font-medium hover:text-orange-400 transition duration-300"
                >
                  Categories
                </Link>
              </li>

              <li className="w-full border-t border-white/10">
                <Link
                  to="/about"
                  onClick={() => setOpen(false)}
                  className="block w-full text-center py-4 text-white text-lg font-medium hover:text-orange-400 transition duration-300"
                >
                  About
                </Link>
              </li>

              <li className="w-full border-t border-white/10 px-5 pt-5">
                <Link to="/state" onClick={() => setOpen(false)}>
                  <button className="w-full py-3 rounded-full bg-gradient-to-r from-orange-500 to-green-500 text-white font-semibold shadow-lg hover:scale-105 transition duration-300">
                    Explore India
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
