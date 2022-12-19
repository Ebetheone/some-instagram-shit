/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import { useEffect, useState, useContext } from "react";
import { getPhotosOfUser } from "../../lib/api";
import Context from "../../context";
const Users = ({ el }) => {
  const router = useRouter();
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
  const ctx = useContext(Context);
  const mode = ctx.mode;

  return user ? (
    <div
      className="w-[150px] h-[100px] text-center my-2 mr-[27%] cursor-pointer flex items-center gap-[10px]"
      onClick={() => {
        router.push(`/user/${el._id}`);
      }}
    >
      <img
        src={`http://localhost:3000/images/${user.file_name}`}
        className="rounded-full w-3/4 mx-auto object-cover"
        alt="Avatar"
      />
      <div className="text-left">
        <h5
          className={
            mode
              ? "text-sm font-medium leading-tight text-black"
              : "text-sm font-medium leading-tight text-white"
          }
        >
          {el.first_name}
        </h5>
        <p className="text-gray-500 text-sm">{el.occupation}</p>
      </div>
    </div>
  ) : null;
};

export default Users;
