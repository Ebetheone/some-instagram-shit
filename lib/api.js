import axios from "axios";
export const getAllUsers = async () => {
  console.log("asdasd");
  let users = await fetch(`http://localhost:3001/user/list`);
  users = users.json();

  return users;
};
export const getUserInfoById = async (id) => {
  let user = await fetch(`http://localhost:3001/user/${id}`);
  user = user.json();
  return user;
};
export const getPhotosOfUser = async (id) => {
  let photos = await fetch(`http://localhost:3001/photosOfUser/${id}`);
  photos = photos.json();
  return photos;
};
export const getUserPro = async (id) => {
  let photos = await fetch(`http://localhost:3001/photosOfUser/${id}`);
  photos = photos.json();

  const photo = photos[0];
  return photo;
};
export const getPhotobyid = async (id) => {
  let photo = await fetch(`http://localhost:3001/photoById/${id}`);
  photo = photo.json();
  return photo;
};
export const addCommentById = async (userId, id, comment) => {
  let data = {
    data: comment,
  };
  let config = {
    method: "PUT",
    url: `http://localhost:3001/commentsOfPhoto?photoId=${id}&userId=${userId}`,
    headers: { "Content-Type": "application/json" },
    data: data,
  };

  axios(config)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
