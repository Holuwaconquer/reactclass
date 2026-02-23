import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { CartContext } from "../CartContext";
import { FiShoppingCart } from "react-icons/fi";

const ProductPage = () => {
  const navigate = useNavigate();
  const [products, setproducts] = useState([]);

  let sample =
    "lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque.";
  // console.log(sample.split(' ').slice(0,5).join(' '));

  const [allContent, setallContent] = useState(5);

  const { cart, addToCart, total, removeFromCart } = useContext(CartContext);


  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.products);
        setproducts(data.products);
        // console.log(products);
      });
  }, [products]);

  

  return (
    <div className="">
      <h1>All Products</h1> {cart.length > 0 && <p>cart: {cart.length}</p>}
      {total > 0 && <p>Total: N{total.toLocaleString()}</p>}
      <button
        onClick={() => navigate("/view-cart")}
        className=" relative group flex items-center p-2! bg-white-400 border rounded-md float-right mr-4! hover:bg-orange-400 hover:text-white"
      >
        {" "}
        <FiShoppingCart className="size-8 group-hover:text-white  text-orange-500 mr-1! " />{" "}
        view cart
      </button>
      <div className="absolute top-32 bg-orange-400 text-white rounded-full w-6 h-6 text-center right-5">{cart.length}</div>
      <div className=" p-2! w-full grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-y-4 md:gap-4">
        {products.length > 0 ? (
          products.map((product) => (
            <div
              key={product.id}
              className="lg:w-full  w-[95%] p-5! h-[250] rounded-[10px] bg-white border  shadow-2xl mx-auto!"
            >
              <div className="w-full h-[150px] object-cover">
                <img
                  src={product.thumbnail}
                  className="w-full h-full object-cover"
                  alt={product.name}
                />
              </div>
              <h1 className="text-center font-bold">{product.title}</h1>

              <p className="text-center hover:">
                {product.description.split(" ").slice(0, allContent).join(" ")}

                {allContent == 5 ? (
                  <span
                    onClick={() => setallContent(product.description.length)}
                    className="hover:cursor-pointer"
                  >
                    ...{" "}
                  </span>
                ) : (
                  <span
                    className="hover:cursor-pointer text-red-500"
                    onClick={() => setallContent(5)}
                  >
                    read less
                  </span>
                )}
              </p>
              <p>N{product.price.toLocaleString()}</p>
              <div className="flex gap-2 justify-center mt-8!  pb-2!">
                {" "}
                <button
                  onClick={() => addToCart(product)}
                  className="p-2! bg-green-400 text-white rounded-md hover:bg-green-500 hover:scale-110 transition-all duration-500 "
                >
                  Add to cart
                </button>
                <button
                  onClick={() => removeFromCart(product)}
                  className="mr-2! p-2! bg-red-400 text-white rounded-md   hover:translate-x-1.5 hover:bg-red-500 hover:scale-110 transition-all duration-500"
                >
                  remove from cart
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="">
            <p>no product available</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
