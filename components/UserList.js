import React from "react";
import Users from "./home-user/Users";

const UserList = ({ search, users }) => {
  return (
    <div className="text-gray-700 w-full mx-auto ">
      <div className="py-4">
        <div className="flex justify-center"></div>
      </div>
      <div className="w-2/3 mx-auto flex flex-wrap justify-center">
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
