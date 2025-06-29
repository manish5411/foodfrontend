// ✅ src/Components/Cart.jsx

import React, { useContext } from "react";
import { dataContext } from "../context/UserContext";
import { Link } from "react-router-dom";

export default function Cart() {
  const {
    showCart,
    setShowCart,
    cartItems,
    removeFromCart,
    increaseQty,
    decreaseQty,
    subtotal,
    deliveryFee,
    tax,
    total,
  } = useContext(dataContext);

  if (!showCart) return null;

  return (
    <div className="fixed top-0 right-0 w-[350px] h-full bg-white shadow-lg p-5 overflow-y-auto z-50">
      <button
        onClick={() => setShowCart(false)}
        className="mb-4 text-red-600 font-bold"
      >
        Close
      </button>

      <h2 className="text-xl font-bold mb-4">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="mb-4 flex items-center gap-2 border-b pb-2"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-12 h-12 rounded"
              />

              <div className="flex-1">
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm">₹ {item.price} × {item.quantity}</p>
                <div className="flex gap-1 mt-1">
                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="px-2 py-1 bg-gray-200 rounded"
                  >
                    -
                  </button>
                  <button
                    onClick={() => increaseQty(item.id)}
                    className="px-2 py-1 bg-gray-200 rounded"
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-600 font-bold"
              >
                X
              </button>
            </div>
          ))}

          <div className="mt-4 text-sm text-gray-800">
            <div className="flex justify-between mb-1">
              <span>Subtotal</span>
              <span>₹ {subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-1">
              <span>Delivery Fee</span>
              <span>₹ {deliveryFee.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-1">
              <span>Tax (5%)</span>
              <span>₹ {tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold border-t pt-2 mt-2">
              <span>Total</span>
              <span>₹ {total.toFixed(2)}</span>
            </div>
          </div>

          <Link
            to="/checkout"
            className="mt-4 block bg-green-500 text-white text-center py-2 rounded hover:bg-green-600"
            onClick={() => setShowCart(false)}
          >
            Checkout
          </Link>
        </>
      )}
    </div>
  );
}
