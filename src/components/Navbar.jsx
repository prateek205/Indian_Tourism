import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="fixed top-0 left-0 w-full z-50 backdrop-blur-sm bg-black/30 text-white">
      <div className="flex items-center justify-between px-5 md:px-10 lg:px-16 py-3 h-24">
        {/* Logo */}
        <Link to="/">
          <img
            src="./images/nav-logo.png"
            alt="logo"
            className="w-24 md:w-28 h-24 object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 lg:gap-10 font-bold text-lg">
          <Link to="/" className="hover:text-cyan-400 duration-300">
            <li>Home</li>
          </Link>

          <Link to="/state" className="hover:text-cyan-400 duration-300">
            <li>State</li>
          </Link>

          <Link to="/category" className="hover:text-cyan-400 duration-300">
            <li>Category</li>
          </Link>

          <Link to="/about" className="hover:text-cyan-400 duration-300">
            <li>About</li>
          </Link>
        </ul>

        {/* Hamburger Icon */}
        <div
          className="md:hidden text-4xl cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiMenuAlt3 />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-24 left-0 w-full bg-black/95 backdrop-blur-md overflow-hidden transition-all duration-500 ${
          open ? "max-h-96 py-5" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 font-bold text-lg">
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="hover:text-cyan-400 duration-300"
          >
            <li>Home</li>
          </Link>

          <Link
            to="/state"
            onClick={() => setOpen(false)}
            className="hover:text-cyan-400 duration-300"
          >
            <li>State</li>
          </Link>

          <Link
            to="/category"
            onClick={() => setOpen(false)}
            className="hover:text-cyan-400 duration-300"
          >
            <li>Category</li>
          </Link>

          <Link
            to="/about"
            onClick={() => setOpen(false)}
            className="hover:text-cyan-400 duration-300"
          >
            <li>About</li>
          </Link>
        </ul>
      </div>
    </section>
  );
};

export default Navbar;
