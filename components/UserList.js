import React, { useContext } from "react";
import Users from "./home-user/Users";
import Card from "./card";
import Context from "../context";

const UserList = ({ search, users }) => {
  const ctx = useContext(Context);
  const mode = ctx.mode;

  return (
    <div
      className={
        mode ? "w-full bg-white h-full flex" : "w-full bg-black h-full flex"
      }
    >
      <div className="w-[60%] h-full pt-[50px] flex flex-col gap-5">
        {users.map((el, i) => (
          <div className="text-white w-full flex justify-end" key={i}>
            <Card el={el} />
          </div>
        ))}
      </div>
      <div className="w-[40%] h-full pt-[50px] flex flex-col">
        {users.map((el, i) =>
          el.first_name.toLowerCase().search(search.toLowerCase()) > -1 ? (
            <div className="w-full flex justify-center" key={i}>
              <Users el={el} />
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default UserList;
