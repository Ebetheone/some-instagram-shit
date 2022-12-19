/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { getPhotosOfUser } from "../../lib/api";

const Card = ({ el }) => {
  const [user, setUser] = useState();

  const userPRO = (id) => {
    const photos = getPhotosOfUser(id);
    return photos;
  };

  useEffect(() => {
    userPRO(el._id)
      .then((res) => {
        setUser(res[0]);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="w-2/5 h-full ml-auto flex flex-col border-[1px] border-solid border-[rgb(210,210,210)] rounded-[12px] bg-white">
      <div className="w-11/12 mx-auto h-full flex items-center justify-between">
        <div className="cursor-pointer flex items-center gap-[10px] py-[10px]">
          <img
            src={`http://localhost:3000/images/${user.file_name}`}
            alt="logo"
            className="w-10 h-9 object-cover rounded-[50%]"
          />
          <div className="text-black text-sm font-bold">
            {el.first_name + " " + el.last_name}
          </div>
        </div>
        <img src="/meatball.png" alt="menu" className="cursor-pointer" />
      </div>
      <img
        src={`http://localhost:3000/images/${user.file_name}`}
        alt="picture"
        className="w-full object-cover cursor-pointer"
      />
      <div className="w-11/12 mx-auto flex items-center justify-between">
        <div className="flex items-center gap-[15px]">
          <img
            src="/like.png"
            alt="like"
            className="w-7 object-cover cursor-pointer"
          />
          <img
            src="/comment.png"
            alt="comment"
            className="w-6 object-cover cursor-pointer"
          />
          <img
            src="/plane.png"
            alt="plane"
            className="w-7 object-cover cursor-pointer"
          />
        </div>
        <img
          src="/save.png"
          alt="save"
          className="w-12 h-11 object-cover cursor-pointer"
        />
      </div>
      <div className="text-black w-11/12 mx-auto font-bold text-[15px] flex items-center justify-start cursor-pointer">
        {`${el.followers} likes`}
      </div>
      <div className="w-11/12 text-black mx-auto text-[15px] flex items-center justify-start py-1">
        <strong className="font-bold mr-2 cursor-pointer">
          {el.first_name + " " + el.last_name}
        </strong>{" "}
        {el.location + " " + el.occupation}
      </div>
      <div className="w-11/12 mx-auto flex items-center pb-3 pt-1">
        <input
          onChange={(e) => {
            console.log(e.target.value);
          }}
          type="text"
          placeholder="Add a comment..."
          className="w-10/12 mr-auto outline-slate-900 rounded bg-transparent flex items-center text-black"
        />
        <button className="cursor-pointer flex justify-center items-center text-[#1890ff] font-bold">
          Post
        </button>
      </div>
    </div>
  );
};

export default Card;
