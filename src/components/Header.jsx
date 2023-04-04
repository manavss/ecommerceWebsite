import React, { useState, useContext, useEffect } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { Link } from "react-router-dom";
import Logo from "../img/logo.svg";
import { BsBag } from "react-icons/bs";
import { CartContext } from "../contexts/CartContext";
// import { FiTrash2 } from "react-icons/fi";
const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount, setItemAmount } = useContext(CartContext);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <div
      className={`${
        isActive ? "bg-white py-4 shadow-md" : "bg-none py-4"
      } fixed w-full z-10 transition-all`}
    >
      <div className="flex mx-8 items-center justify-between h-full">
        <Link to="/">
          <div>
            <img className="w-[40px]" src={Logo} alt="" />
          </div>
        </Link>
        <div
          className="cursor-pointer flex relative "
          onClick={() => setIsOpen(!isOpen)}
        >
          <BsBag className="text-2xl" />
          <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
            {itemAmount}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
