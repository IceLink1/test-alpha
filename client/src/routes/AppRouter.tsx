import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import AddProduct from "../pages/AddProducts/AddProduct";
import FullOpen from "../pages/FullOpen/FullOpen";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<FullOpen />} />
      <Route path="/add" element={<AddProduct />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}
