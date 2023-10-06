import React from "react";
import { Grid, Button } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavItem } from "./NavItem";
import { NavList } from "./Navlist";
import { Home } from "./Home";
import { ProductList } from "./ProductList";
import { Counter } from "./Counter";
import { Contact } from "./Contact";
import { Service } from "./Service";

export const Landing = ({ item }) => {
  return (
    <BrowserRouter>
      <NavList />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product" element={<ProductList />} />
        <Route path="counter" element={<Counter />} />
        <Route path="contact" element={<Contact />} />
        <Route path="service" element={<Service />} />
      </Routes>
    </BrowserRouter>
  );
};
