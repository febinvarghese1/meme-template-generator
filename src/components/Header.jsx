import React, { useState } from "react";
import image from "../images/reddit-logo.png";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <header className="flex relative justify-between items-center px-8 sm:justify-between sm:px-14  bg-gray-300">
        <div>
          <img className="object-contain w-22 h-12" src={image} alt="" />
        </div>
        <div
          className="transition-all duration-500"
          onClick={() => setToggle(!toggle)}
        >
          {toggle ? (
            <XIcon className="w-12 h-12 text-black   " />
          ) : (
            <MenuIcon className="w-12 h-12 text-black " />
          )}
        </div>
      </header>
      {toggle && (
        <div className="absolute top-12 right-0 h-screen w-1/2 bg-gray-800 flex pl-4 text-2xl  flex-col">
          <h1 className="mb-5">Top</h1>
          <h1>Trending</h1>
        </div>
      )}
    </>
  );
};

export default Header;
