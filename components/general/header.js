/* eslint-disable @next/next/no-img-element */
// import Image from "next/image";
import Link from "next/link";
import React, { useState, useContext } from "react";
import Context from "../../context";

const Header = ({ setSearch }) => {
  const [show, setShow] = useState(true);
  const ctx = useContext(Context);
  const setMode = (props) => {
    ctx.setMode(props);
  };
  const mode = ctx.mode;

  return (
    <div
      className={
        mode
          ? "w-100 border-b shadow-sm bg-white sticky top-0 z-10"
          : "w-100 border-b shadow-sm bg-[#000] sticky top-0 z-10"
      }
    >
      <div className="flex justify-between items-center h-16 px-2 max-w-5xl mx-auto">
        <div className="flex">
          <Link href={"/"}>
            {mode ? (
              <img
                src="/images/logo.png"
                alt="logo"
                className="cursor-pointer w-28 h-full flex object-cover"
              />
            ) : (
              <img
                src="/images/whitelogo.png"
                alt="logo"
                className="cursor-pointer w-28 h-full flex object-cover"
              />
            )}
          </Link>
        </div>
        <div className="hidden w-72  sm:flex relative mx-4">
          <input
            type="text"
            placeholder="Search"
            className="h-9 w-full rounded-md bg-[#efefef] pl-8 outline-0 border-none"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>
        <div
          className="flex align-center justify-center gap-2 relative"
          onClick={() => setShow(!show)}
        >
          <div className="btn cursor-pointer hidden sm:flex">
            <img
              src="/images/took2.jpg"
              alt="profile"
              className="w-11 h-10 object-cover rounded-[50%]"
            />
          </div>
          <div
            className={
              mode
                ? "btn cursor-pointer hidden sm:flex m-0 flex align-center justify-center mt-[9px] text-serif text-black"
                : "btn cursor-pointer hidden sm:flex m-0 flex align-center justify-center mt-[9px] text-serif text-white"
            }
          >
            Profile
          </div>
          <div
            className={
              show
                ? "absolute w-[120px] h-10 top-[50px] z-1 flex flex-col align-center justify-center m-0"
                : "hidden"
            }
          >
            <div
              className={
                mode
                  ? "bg-[#000] h-full text-[rgb(255,255,255)] rounded-lg font-serif w-full text-center cursor-pointer flex align-center justify-center m-0 pt-2"
                  : "hidden"
              }
              onClick={() => setMode(false)}
            >
              Dark mode
            </div>
            <div
              className={
                mode
                  ? "hidden"
                  : "bg-[rgb(255,255,255)] h-full text-[#000] rounded-lg font-serif w-full text-center cursor-pointer flex align-center justify-center m-0 pt-2"
              }
              onClick={() => setMode(true)}
            >
              Light mode
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
