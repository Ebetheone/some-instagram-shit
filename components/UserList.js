import React, { useContext } from "react";
import Users from "./home-user/Users";
import Context from "../context";

const UserList = ({ search, users }) => {
  const ctx = useContext(Context);
  const mode = ctx.mode;

  return (
    <div
      className={
        mode
          ? "text-gray-700 w-full mx-auto bg-white h-[93.4vh]"
          : "text-gray-700 w-full mx-auto bg-black h-[93.4vh]"
      }
    >
      <div className="py-4">
        <div className="flex justify-center"></div>
      </div>
      <div className="w-2/3 mx-auto flex flex-wrap justify-center align-center mt-[100px]">
        {users.map((el, i) =>
          el.first_name.toLowerCase().search(search.toLowerCase()) > -1 ? (
            <Users key={i} el={el} />
          ) : null
        )}
      </div>
    </div>
  );
};

export default UserList;
