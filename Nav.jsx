// ✅ src/Components/Nav.jsx

import React, { useContext } from "react";
import { dataContext } from "../context/UserContext";
import { MdFastfood } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { RiShoppingBag3Line } from "react-icons/ri";

export default function Nav() {
  const { input, setInput, setShowCart, cartItems } = useContext(dataContext);

  return (
    <header className="w-full flex items-center justify-between p-4 bg-white shadow-md">
      {/* Logo */}
      <div className="w-[60px] h-[60px] bg-green-600 rounded-full flex justify-center items-center text-white text-3xl">
        <MdFastfood />
      </div>

      {/* Search */}
      <div className="flex items-center w-[500px] border border-gray-300 rounded-full px-4 py-2 bg-gray-100">
        <IoMdSearch className="text-gray-500 mr-2" size={24} />
        <input
          type="text"
          placeholder="Search Items..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="bg-transparent flex-1 outline-none"
        />
      </div>

      {/* Cart Icon */}
      <div
        className="relative cursor-pointer"
        onClick={() => setShowCart(true)}
      >
        <RiShoppingBag3Line size={30} />
        {cartItems.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-green-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
            {cartItems.length}
          </span>
        )}
      </div>
    </header>
  );
}
