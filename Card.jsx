// ✅ src/Components/Card.jsx

import React, { useContext } from "react";
import { dataContext } from "../context/UserContext";

export default function Card({ id, name, price, image, type }) {
  const { addToCart } = useContext(dataContext);

  return (
    <div className="p-4 bg-white rounded shadow hover:shadow-lg transition w-[250px] relative">
      {/* Veg/Non-Veg Badge */}
      <div className="absolute top-2 right-2">
        {type === "veg" ? (
          <span className="px-2 py-1 text-xs bg-green-600 text-white rounded">
            VEG
          </span>
        ) : (
          <span className="px-2 py-1 text-xs bg-red-600 text-white rounded">
            NON-VEG
          </span>
        )}
      </div>

      <img
        src={image}
        alt={name}
        className="w-full h-40 object-cover rounded mb-2"
      />
      <h3 className="text-lg font-bold mb-1">{name}</h3>
      <p className="text-green-600 font-semibold mb-2">₹ {price}/-</p>
      <button
        onClick={() => addToCart({ id, name, price, image, type })}
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 w-full"
      >
        Add to Cart
      </button>
    </div>
  );
}
