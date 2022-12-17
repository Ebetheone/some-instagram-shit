import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Modal from "../../components/general/modal";
import LayOut from "../../components/layout/layout";
import Gallery from "../../components/user-photo-gallery/gallery";
import { getPhotosOfUser, getUserInfoById, getPhotobyid } from "../../lib/api";
import { addCommentById } from "../../lib/api";
export const getServerSideProps = async (context) => {
  const user = await getUserInfoById(context.query.user);

  const photos = await getPhotosOfUser(user._id);

  return { props: { user, photos: photos ? photos : [] } };
};

export default ({ user, photos }) => {
  const router = useRouter();
  const [modalData, setModalData] = useState();
  const [newcomm, setNewcomm] = useState("");
  const [allcomments, setComments] = useState(
    modalData ? modalData.comments : {}
  );
  const sendComment = async () => {
    let newComment = newcomm;
    await addCommentById(modalData._id, newComment);
    setNewcomm("");
    router.reload();
  };
  useEffect(() => {}, [allcomments]);
  return (
    <LayOut>
      <div className="md:w-2/3 bg-gray-100 flex flex-col items-center  mx-auto h-[100vh] text-gray-800">
        <Modal
          allcomments={allcomments}
          newcomm={newcomm}
          setNewcomm={setNewcomm}
          modalData={modalData ? modalData : null}
          sendComment={sendComment}
        />
        <section className="w-full border-b-[1px] py-1 px-1 border-gray-300 bg-gray-200">
          {/* user iin medeelel baih heseg */}
          <div className="w-full h-full flex justify-between md:justify-center items-center">
            <div className="md:mr-14 lg:mr-28 xl:mr-48">
              <img
                className="w-32 h-32 lg:w-40 lg:h-40 my-4  rounded-full"
                src={`http://localhost:3000/images/${photos[0].file_name}`}
              />
            </div>
            <div>
              <div className="flex my-2">
                <p className="text-3xl mr-2 ">{user.first_name}</p>
                <p className="text-3xl ">{user.last_name}</p>
              </div>

              <div className="flex my-2 text-xl font-bold">
                <div className="flex mr-2">
                  {" "}
                  <p className="mr-2">posts: </p>
                  <p>{photos.length}</p>
                </div>
                <div className="flex ">
                  {" "}
                  <p className="mr-2">followers: </p>
                  <p>{user.followers}</p>
                </div>
              </div>
              <div className="flex">
                <p className="font-bold">occupation : </p>
                <p className="mr-4">{user.occupation}</p>
                <div className="flex">
                  <p className="font-bold"> location : </p>
                  <p>{user.location}</p>
                </div>
              </div>

              <div className="w-72">{user.description}</div>
            </div>
          </div>
        </section>
        <section className="w-full">
          {/* profile iin zuragnuud bairlah heseg */}

          <Gallery
            setModalData={setModalData}
            photos={photos}
            setComments={setComments}
          />
          {/* {photos.map((el, i) => (
            <img key={i} src={`http://localhost:3000/images/${el.file_name}`} />
          ))} */}
        </section>
      </div>
    </LayOut>
  );
};
