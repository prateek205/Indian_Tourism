import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import State from "./pages/State";
import Category from "./pages/Category";
import About from "./pages/About";
import { Route, Routes } from "react-router-dom";
import DetailPage from "./pages/DetailPage";
import CategoryDetail from "./pages/CategoryDetails";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/state" element={<State />} />
        <Route path="/category" element={<Category />} />
        <Route path="/about" element={<About />} />
        <Route path="/details/:id" element={<DetailPage/>}/>
        <Route path="/categoryDetails/:title" element={<CategoryDetail/>}/>
      </Routes>
    </>
  );
};

export default App;
