import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getUserPro, getPhotosOfUser } from "../../lib/api";
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
  console.log(user);
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
      <h5 className="text-xl font-medium leading-tight mb-2">
        {el.first_name}
      </h5>
      <p className="text-gray-500">{el.occupation}</p>
    </div>
  ) : null;
};

export default Users;
