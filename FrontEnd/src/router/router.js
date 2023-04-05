import React from "react";
import ReactDOM from "react-dom";
import { Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Listings from "../pages/Listings";
import Error from "../pages/Error";
import SingleAnimal from "../pages/SingleAnimal";
import SignUp from "../pages/SignUp";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/animal/:id" element={<SingleAnimal />} />
      <Route path="/listings" element={<Listings />} />
      <Route path="*" element={<Error />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default AppRouter;
