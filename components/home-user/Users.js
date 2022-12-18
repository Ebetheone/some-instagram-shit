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
      className="text-center mx-4 my-2 cursor-pointer"
      onClick={() => {
        router.push(`/user/${el._id}`);
      }}
    >
      <img
        src={`http://localhost:3000/images/${user.file_name}`}
        className="rounded-full w-32 h-32 mb-4 mx-auto"
        alt="Avatar"
      />
      <h5
        className={
          mode
            ? "text-xl font-medium leading-tight mb-2 text-black"
            : "text-xl font-medium leading-tight mb-2 text-white"
        }
      >
        {el.first_name}
      </h5>
      <p className="text-gray-500">{el.occupation}</p>
    </div>
  ) : null;
};

export default Users;
