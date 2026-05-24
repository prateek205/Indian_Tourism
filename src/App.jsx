import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import State from "./pages/State";
import Category from "./pages/Category";
import About from "./pages/About";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/state" element={<State />} />
        <Route path="/category" element={<Category />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
};

export default App;
