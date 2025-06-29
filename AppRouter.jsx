// src/router/AppRouter.jsx
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../Pages/Home";
import Checkout from "../Pages/Checkout";
import AdminLogin from "../Pages/AdminLogin";
import AdminDashboard from "../Pages/AdminDashboard";
import AddProduct from "../Pages/AddProduct";

export default function AppRouter() {
  const isAdmin = localStorage.getItem("isAdmin");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />

        <Route path="/admin-login" element={<AdminLogin />} />
        <Route
          path="/admin"
          element={isAdmin ? <AdminDashboard /> : <Navigate to="/admin-login" />}
        />
        <Route
          path="/admin/add-product"
          element={isAdmin ? <AddProduct /> : <Navigate to="/admin-login" />}
        />
      </Routes>
    </BrowserRouter>
  );
}
