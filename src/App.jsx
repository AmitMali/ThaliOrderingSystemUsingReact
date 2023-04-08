import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./Pages/Home";
import Checkout from "./Pages/Checkout";
import Cart from "./Pages/Cart";
const App = () => {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
