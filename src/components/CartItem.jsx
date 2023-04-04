import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdClose, IoMdRemove, IoMdAdd } from "react-icons/io";
import { CartContext } from "../contexts/CartContext";

const CartItem = ({ item }) => {
  const { removeFromCart, increaseAmount, decreaseAmount } =
    useContext(CartContext);
  const { id, title, image, price, amount } = item;
  return (
    <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500 ">
      <div className="w-full min-h-[100px] flex items-center gap-x-4">
        <Link to={`/product/${id}`}>
          <img className="max-w-[60px]" src={image} alt="" />
        </Link>
        <div className="w-full flex flex-col">
          <div className="flex justify-between mb-2">
            <Link
              className=" uppercase font-medium max-w-[240px] text-primary hover:underline text-m"
              to={`/product/${id}`}
            >
              {title}
            </Link>
            <div
              onClick={() => removeFromCart(id)}
              className="text-xl cursor-pointer"
            >
              <IoMdClose className="text-gray-500 hover:text-red-500 transition" />
            </div>
          </div>
          <div className=" flex gap-x-2 h-[36px] text-sm">
            <div
              className="flex flex-1 max-w-[100px] items-cen
             h-full border text-primary font-medium"
            >
              <div
                onClick={() => decreaseAmount(id)}
                className=" flex-1 flex justify-center items-center cursor-pointer  "
              >
                <IoMdRemove />
              </div>
              <div className="h-full flex justify-center items-center px-2">
                {amount}
              </div>
              <div
                onClick={() => increaseAmount(id)}
                className="flex-1 h-full flex justify-center items-center cursor-pointer hover:bg-gray-200"
              >
                <IoMdAdd />
              </div>
            </div>
            <div className="flex-1 flex justify-around items-center">
              $ {price}
            </div>
            <div className="flex-1 flex justify-end items-center text-primary font font-medium">{`$ ${parseFloat(
              price * amount
            )}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
