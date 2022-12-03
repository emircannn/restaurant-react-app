import React, { useState } from "react";
import { BsFillBasket2Fill } from "react-icons/bs";
import { IoMenu, IoSearch, IoWallet } from "react-icons/io5";
import { AiOutlineClose, AiFillTag, AiFillHeart } from "react-icons/ai";
import { TbTruckDelivery, TbHelp } from "react-icons/tb";
import { FaUserFriends } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="w-full bg-rose-600 ">
      <div className="mx-[7.5%] py-6 flex items-center justify-between">
        <div className="flex items-center justify-center gap-4">
          <IoMenu
            onClick={() => setNav(!nav)}
            className="text-white cursor-pointer"
            size={35}
          />
          <a href="/#">
            <h1 className="font-bold text-white uppercase text-2xl">Duman <span className="text-gray-800">Izgara</span></h1>
          </a>
        </div>

        <div className="flex gap-3 items-center justify-start bg-rose-400 w-[600px] 
        py-2 px-3 rounded-full max-md:w-[300px]  max-sm:w-[175px] max-lg:w-[400px]">
          <IoSearch size={20} className="text-white" />
          <input
            type="text"
            placeholder="Arama"
            className="bg-transparent outline-none text-white placeholder:text-white/50"
          />
        </div>

        <div className="flex items-center justify-center gap-2 max-md:hidden">
          <button className="bg-white px-6 py-3 rounded-full flex items-center justify-center 
          gap-2 group hover:bg-gray-800 duration-300">
            <span className="text-rose-600 font-medium group-hover:text-white duration-300">
              Sepet
            </span>
            <BsFillBasket2Fill
              className="text-rose-600 group-hover:text-white duration-300"
              size={25}
            />
          </button>
        </div>
      </div>

      
      {/* Menu */}
      {/* Overlay */}
      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0 
        duration-500 opacity-100"></div>
      ) : (
        ""
      )}
      {/* SideMenu */}
      <div
        className={
          nav
            ? "fixed w-[300px] h-screen bg-rose-600 z-10 duration-500 top-0 left-0"
            : "fixed w-[300px] h-screen bg-rose-600 z-10 duration-500 top-0 left-[-100%]"
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={30}
          className="text-white absolute right-4 top-4 cursor-pointer"
        />
        {/*<img className="w-[80px] object-cover m-4" src={Logo} alt="" />*/}
        <a href="/#">
            <h1 className="font-bold text-white uppercase text-2xl m-4">Duman <span className="text-gray-800">Izgara</span></h1>
          </a>

        <nav>
          <ul className="flex flex-col p-4">
            <li className="flex items-center text-white text-lg py-4 uppercase 
            hover:bg-gray-800 rounded-full px-2 cursor-pointer duration-300">
              <TbTruckDelivery size={25} className="mr-4" /> Siparişlerim
            </li>
            <li className="flex items-center text-white text-lg py-4 uppercase 
            hover:bg-gray-800 rounded-full px-2 cursor-pointer duration-300">
              <AiFillHeart size={25} className="mr-4" /> Favoriler
            </li>
            <li className="flex items-center text-white text-lg py-4 uppercase 
            hover:bg-gray-800 rounded-full px-2 cursor-pointer duration-300">
              <IoWallet size={25} className="mr-4" /> Cüzdan
            </li>
            <li className="flex items-center text-white text-lg py-4 uppercase 
            hover:bg-gray-800 rounded-full px-2 cursor-pointer duration-300">
              <TbHelp size={25} className="mr-4" /> Yardım
            </li>
            <li className="flex items-center text-white text-lg py-4 uppercase 
            hover:bg-gray-800 rounded-full px-2 cursor-pointer duration-300">
              <AiFillTag size={25} className="mr-4" /> Promosyon
            </li>
            <li className="flex items-center text-white text-lg py-4 uppercase 
            hover:bg-gray-800 rounded-full px-2 cursor-pointer duration-300">
              <FaUserFriends size={25} className="mr-4" /> Arkadaşını Davet Et
            </li>
          </ul>
        </nav>

        <div className="items-center justify-center hidden max-md:flex">
          <button className="bg-white px-6 py-3 rounded-full flex items-center justify-center 
          gap-2 group hover:bg-gray-800 duration-300">
            <span className="text-rose-600 font-medium group-hover:text-white duration-300">
              Sepet
            </span>
            <BsFillBasket2Fill
              className="text-rose-600 group-hover:text-white duration-300"
              size={25}
            />
          </button>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
