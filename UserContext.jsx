// ✅ src/context/UserContext.jsx
import React, { createContext, useState } from "react";
import Dishes from "../Components/Dishes"; // ✅ Dishes ko import karo!

export const dataContext = createContext();

export default function UserContext({ children }) {
  const [input, setInput] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [orders, setOrders] = useState([]);
  const [user, setUser] = useState(null);

  const [products, setProducts] = useState(Dishes); // ✅ yahan pe Dishes use karo

  const addToCart = (item) => {
    const existing = cartItems.find((i) => i.id === item.id);
    if (existing) {
      setCartItems((prev) =>
        prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        )
      );
    } else {
      setCartItems((prev) => [...prev, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const increaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const deliveryFee = subtotal > 0 ? 40 : 0;
  const tax = subtotal * 0.05;
  const total = subtotal + deliveryFee + tax;

  const addProduct = (newProduct) => {
    setProducts((prev) => [...prev, { ...newProduct, id: Date.now() }]);
  };

  return (
    <dataContext.Provider
      value={{
        input,
        setInput,
        cartItems,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty,
        showCart,
        setShowCart,
        orders,
        setOrders,
        user,
        setUser,
        total,
        deliveryFee,
        tax,
        subtotal,
        setCartItems,
        products,
        addProduct,
      }}
    >
      {children}
    </dataContext.Provider>
  );
}
