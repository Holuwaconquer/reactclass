import React, { useEffect, useState } from "react";
import { CartContext } from "../CartContext";

const CartProvider = ({ children }) => {
  // load card from localstorage
  const [cart, setcart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const addToCart = (product) => {
    setcart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      alert("successfully added!");
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const decreaseQuantity = (product) => {
    setcart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const removeFromCart = (product) => {
    setcart((prevcart) => prevcart.filter((item) => item.id !== product.id));
    alert("successfullly removed!");
  };

  const clearCart = () => setcart([]);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // find  - returns the first element in the array that satisfies the provided testing function. Otherwise, it returns undefined.
  // filter - return all the elements in the array that satisfy the provided testing function. Otherwise, it returns an empty array.
  // reduce - executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        total,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
