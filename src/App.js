import React, { createContext, useState } from "react";
import "./App.css";
import "./scss/app.scss";
import NotFound from "./pages/404";
import Home from "./pages/Home";
import ItemInfo from "./pages/ItemInfo";
import Cart from "./pages/Cart";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/Layouts/MainLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="cart" element={<Cart />}></Route>
        <Route path="pizza/:id" element={<ItemInfo />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
