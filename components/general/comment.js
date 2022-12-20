/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useEffect, useState, useContext } from "react";
import { getPhotosOfUser, getUserPro } from "../../lib/api";
import Context from "../../context";

const Comment = ({ el }) => {
  const [user, setUser] = useState();

  const userPRO = async (id) => {
    const photos = await getPhotosOfUser(id);
    return photos;
  };

  useEffect(() => {
    el?.user_id &&
      userPRO(el?.user_id)
        .then((res) => {
          setUser(res[0]);
        })
        .catch((err) => console.log(err));
  }, [el]);

  const ctx = useContext(Context);
  const mode = ctx.mode;

  return user ? (
    // my-2
    <div className="w-11/12 mx-auto flex items-center pb-3 pt-1">
      {" "}
      <div className="w-full  flex">
        <div className="flex mr-2 ">
          <div className="mr-2 w-10 h-10">
            <img
              className="w-10 h-10 rounded-full"
              src={`http://localhost:3000/images/${user?.file_name}`}
            />
          </div>
        </div>
        <div>
          <div>
            <p className="text-black">{el?.comment}</p>
            <p className="text-gray-400 text-sm">{el?.date_time}</p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>loading</div>
  );
};

export default Comment;
