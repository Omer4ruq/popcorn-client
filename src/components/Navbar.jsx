import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
      <div>
        <h1 className="text-red-600 font-bold text-4xl cursor-pointer">
          POPCORN
        </h1>
      </div>
      <div className="">
        <button className="text-white pr-2">Sign In</button>
        <button className="text-white bg-red-600 px-2 rounded cursor-pointer">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
