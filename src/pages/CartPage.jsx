import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import { useNavigate } from "react-router";
import { FiShoppingCart } from "react-icons/fi";

const CartPage = () => {
  const navigate = useNavigate();
  const { cart, addToCart, total, removeFromCart, decreaseQuantity } =
    useContext(CartContext);

  return (
    <div>
      <div className="w-full flex gap-x-5 items-start bg-gray-200 p-2!">
        {" "}
        <button
          onClick={() => navigate("/")}
          className="text-gray-700 cursor-pointer ml-2!"
        >
          Home
        </button>
        <span> {">"} </span>
        <button className="text-blue-400 font-semibold cursor-pointer">
          {" "}
          Shopping-Cart
        </button>
      </div>
      {cart.length >= 1 ? (
        <div className="my-5! px-5!  bg-white  gap-x-2 flex lg:flex-row flex-col    ">
          <div className=" mb-5! w-175 lg:w-[60%] font-light   rounded-md  border border-black/40 shadow-md">
            {" "}
            <p className="py-3! px-2! font-bold leading-7">
              {" "}
              Shopping cart ( {cart.length} )
            </p>
            <table className="carttable bg-gray-100 w-full lg:w-auto lg:px-0!  text-black font-semibold font-serif">
              <thead className="text-sm font-extralight text-gray-400">
                <tr>
                  <th>PRODUCTS</th>
                  <th>PRICE</th>
                  <th>QUANTITY</th>
                  <th>SUB_TOTAL</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {cart.map((items, index) => (
                  <tr key={items.id}>
                    <td className="items-center gap-x-1 flex">
                      <button
                        onClick={() => removeFromCart(items)}
                        className=" rounded-full px-1.5! cursor-pointer hover:text-red-400 border "
                      >
                        x
                      </button>
                      <img
                        src={items.thumbnail}
                        alt={items.title}
                        className="w-12 h-12"
                      />
                      <p className="text-black text-lg">
                        {/* {items.description.split(" ").splice(0, 15).join(" ")} */}
                        {items.title}
                      </p>
                    </td>
                    <td>${items.price}</td>
                    <td>
                      <div className="flex bg-white  border justify-around w-30 py-2!">
                        {" "}
                        <button
                          onClick={() => addToCart(items)}
                          className="font-bold  cursor-pointer hover:text-green-400"
                        >
                          +
                        </button>
                        {items.quantity}
                        <button
                          onClick={() =>
                            items.quantity === 1
                              ? removeFromCart(items)
                              : decreaseQuantity(items)
                          }
                          className="cursor-pointer font-bold hover:text-red-400"
                        >
                          -
                        </button>
                      </div>
                    </td>
                    <td>{(items.quantity * items.price).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className=" mx-auto! group   border-2 my-3! box-border w-60 p-3! border-[#2DA5F3] hover:bg-[#2DA5F3] rounded-md ">
              <button
                onClick={() => navigate("/products")}
                className=" mx-auto! text-[#2DA5F3] outline-none flex  gap-x-5 items-centers group-hover:text-white transition-all duration-500"
              >
                <p>⬅️</p>
                <p className="font-bold"> RETURN TO SHOP</p>
              </button>
            </div>
          </div>
          <div className="  px-3!   w-175 lg:w-[40%] rounded-md  border border-black/40 shadow-md">
            {" "}
            <div className="w-full flex flex-col gap-y-2 ">
              <h2 className="my-5! text-xl font-semibold leading-tight font-sans  ">
                Cart Totals
              </h2>
              <div className="flex justify-between">
                {" "}
                <p className="text-black/60">Sub-Total</p>
                <p className="font-bold">${total.toLocaleString()}</p>
              </div>
              {cart.length === 1 ? (
                <div className="flex justify-between">
                  <p className="text-black/60"> Shipping</p>

                  <p className="font-bold">
                    {cart[0].shippingInformation || " - "}
                  </p>
                </div>
              ) : (
                <div className="flex justify-between">
                  <p className="text-black/60">Shipping</p>
                  <p className="font-bold">free</p>
                </div>
              )}

              <div className="flex justify-between">
                <p className="text-black/60">discount</p>
                <p className="font-bold"> - </p>
              </div>
              <div className="border-b border-black/20 w-[95%] lg:w-[80%] my-2! mx-auto! "></div>
              <div className="flex justify-between">
                <p className="text-gray-400" >Sub-Total</p>
                <p className="font-bold">${total.toLocaleString()}</p>
              </div>
              <div className="mx-auto! justify-center">
                <button onClick={()=> navigate("/signup")} className="bg-orange-400 py-5! rounded-sm  text-white w-full px-52!  hover:bg-orange-500 transition-colors duration-200 my-2! shadow-md font-bold  ">
                  CHECH OUT NOW ➡️
                </button>
              </div>
            </div>{" "}
          </div>
        </div>
      ) : (
        <div className="bg-white">
          <div className=" group flex flex-col  bg-orange-400 w-25 h-25 rounded-full mx-auto! mt-12! mb-4! justify-center items-center shadow-2xl hover:bg-white transition-all duration-400">
            <div>
              <FiShoppingCart className="size-8 group-hover:text-orange-400  text-white m-auto!  transition-all duration-400" />
            </div>
            {/* <p className="text-white group-hover:text-orange-400 transition-all duration-400">
              {" "}
              view cart
            </p> */}
          </div>
          <p className="text-center text-xl">Your cart is empty!</p>
          <p className="text-center text-xl">
            Browse our categories and discover our best deals!
          </p>
          <div className="mx-auto! my-4! w-150 ">
            <button
              onClick={() => navigate("/products")}
              className="text-center border   p-2! bg-orange-400 text-white  hover:text-orange-400 hover:bg-white  transition-all duration-400 rounded-sm w-full box-border"
            >
              Start Shopping
            </button>
          </div>
        </div>
      )}
      {console.log(cart)};
    </div>
  );
};

export default CartPage;
