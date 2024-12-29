import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <header className="h-16 bg-white flex items-center justify-between text-black py-6 px-8 mid:px-32 drop-shadow-md">
        <a href="#">
          <img
            src={logo}
            alt=""
            className="w-20 hover:scale-105 transition-all"
          />
        </a>
        <ul className="hidden xl:flex items-center gap-12 font-semibold text-base">
          <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer">
            <Link to={"/home2"}>Home</Link>
          </li>

          <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer">
            <Link to={"/list"}>List</Link>
          </li>
          <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer">
            <Link to={"/home"}>Create Course</Link>
          </li>
        </ul>
        <button className="bg-red-400 text-white px-4 py-2 rounded-md hover:bg-red-600 transition all">
          <Link to={"/"}>logout</Link>
        </button>
      </header>
    </div>
  );
}

export default Navbar;
