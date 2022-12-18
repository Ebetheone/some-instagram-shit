// import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Header = ({ setSearch }) => {
  return (
    <div className="w-100 border-b shadow-sm bg-white sticky top-0 z-10">
      <div className="flex justify-between items-center h-16 px-2 max-w-5xl mx-auto">
        <div className="flex">
          <Link href={"/"}>
            <div className="cursor-pointer w-28 h-full flex">LOGO</div>
          </Link>
        </div>

        <div className="hidden w-72  sm:flex relative mx-4">
          <input
            type="text"
            placeholder="Search"
            className="h-9 w-full rounded-md bg-[#efefef] pl-8 outline-0"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>
        {/* Right */}
        <div className="flex space-x-5">
          <Link href={"/"}>
            <div className="btn cursor-pointer hidden sm:flex">Home</div>
          </Link>
          <div className="btn cursor-pointer hidden sm:flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
