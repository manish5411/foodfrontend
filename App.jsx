// App.jsx
import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

// Components
import Nav from "./Components/Nav";
import Cart from "./Components/Cart";

// Pages
import Home from "./Pages/Home";
import AdminDashboard from "./Pages/AdminDashboard";
import AddProduct from "./Pages/AddProduct";
import Orders from "./Pages/Orders";
import Login from "./Pages/Login";
import Checkout from "./Pages/Checkout";
import Success from "./Pages/Success";

// Context
import UserContext, { dataContext } from "./context/UserContext"; // ✅

function Layout() {
  const location = useLocation();
  const { showCart } = React.useContext(dataContext);

  return (
    <>
      {location.pathname === "/" && <Nav />}
      {showCart && <Cart />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/add-product" element={<AddProduct />} />
        <Route path="/admin/view-orders" element={<Orders />} />
        <Route path="/admin/login" element={<Login />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <UserContext> {/* ✅ Ye wrap hona hi hona chahiye */}
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </UserContext>
  );
}
