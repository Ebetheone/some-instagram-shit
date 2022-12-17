import { useEffect, useState } from "react";
import { getPhotosOfUser, getUserPro } from "../../lib/api";

const Comment = ({ el }) => {
  const [user, setUser] = useState();

  const userPRO = async (id) => {
    const photos = await getPhotosOfUser(id);
    return photos;
  };
  useEffect(() => {
    userPRO(el.user_id)
      .then((res) => {
        setUser(res[0]);
      })
      .catch((err) => console.log(err));
  }, []);

  return user ? (
    <div className="my-2">
      {" "}
      <div className="w-full  flex">
        <div className="flex mr-2 ">
          <div className="mr-2 w-10 h-10">
            <img
              className="w-10 h-10 rounded-full"
              src={`http://localhost:3000/images/${user.file_name}`}
            />
          </div>
        </div>
        <div>
          <div>
            <div className="flex">
              <p className="mr-4">{user.first_name}</p>
              <p className="text-gray-500">{el.comment}</p>
            </div>

            <p className="text-gray-400 text-sm">{el.date_time}</p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>loading</div>
  );
};

export default Comment;
