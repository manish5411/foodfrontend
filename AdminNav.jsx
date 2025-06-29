// ✅ src/Components/AdminNav.jsx

import React from "react";
import { Link } from "react-router-dom";

export default function AdminNav() {
  return (
    <nav className="bg-green-600 px-6 py-4 text-white flex justify-between items-center">
      <h1 className="font-bold text-xl">Admin Panel</h1>
      <div className="flex gap-6">
        <Link to="/admin/dashboard" className="hover:underline">
          Dashboard
        </Link>
        <Link to="/" className="hover:underline">
          Back to Site
        </Link>
      </div>
    </nav>
  );
}
