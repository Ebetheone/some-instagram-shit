/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import Modal from "../../components/general/modal";
import LayOut from "../../components/layout";
import Gallery from "../../components/user-photo-gallery/gallery";
import { getPhotosOfUser, getUserInfoById } from "../../lib/api";
import { addCommentById } from "../../lib/api";
import Context from "../../context";

export const getServerSideProps = async (context) => {
  const user = await getUserInfoById(context.query.user);
  const photos = await getPhotosOfUser(user._id);

  return { props: { user, photos: photos ? photos : [] } };
};

export default function Profile({ user, photos }) {
  const router = useRouter();
  const [modalData, setModalData] = useState();
  const [newcomm, setNewcomm] = useState("");
  const [allcomments, setComments] = useState(
    modalData ? modalData.comments : {}
  );

  const sendComment = async () => {
    let newComment = newcomm;
    await addCommentById(user?._id, modalData._id, newComment);
    setNewcomm("");
    router.reload();
  };
  useEffect(() => {}, [allcomments]);

  const ctx = useContext(Context);
  const mode = ctx.mode;
  return (
    <LayOut>
      <div
        className={
          mode
            ? "md:w-2/3  bg-white flex flex-col items-center  mx-auto h-[93.4vh] text-gray-800"
            : "md:w-2/3  bg-black flex flex-col items-center  mx-auto h-[93.4vh] text-gray-800"
        }
      >
        <Modal
          allcomments={allcomments}
          newcomm={newcomm}
          setNewcomm={setNewcomm}
          modalData={modalData ? modalData : null}
          sendComment={sendComment}
        />
        <section className="max-w-7xl mx-5 p-10 xl:mx-auto">
          <div className="grid grid-cols-4 gap-5">
            <div className="relative col-span-1 text-center cursor-pointer w-40 h-30">
              <img
                className="rounded-full w-40 h-40 mb-4 mx-auto"
                src="/images/kenobi1.jpg"
                alt="prolfe pic"
                layout="fill"
              />
            </div>
            <div className="col-span-2 py-3">
              <span
                className={
                  mode
                    ? "text-black text-2xl mr-2 ml-4"
                    : "text-white text-2xl mr-2 ml-4"
                }
              >
                {user.first_name}
              </span>
              <span
                className={mode ? "text-black text-2xl" : "text-white text-2xl"}
              >
                {user.last_name}
              </span>
              <div className="flex">
                <div className={mode ? "ml-4 text-black" : "ml-4 text-white"}>
                  <span className="font-semibold mr-2">{user.followers}</span>
                  followers
                </div>
                <div className={mode ? "ml-4 text-black" : "ml-4 text-white"}>
                  <span className="font-semibold mr-2">{photos.length}</span>{" "}
                  posts
                </div>
              </div>
              <div className={mode ? "flex text-black" : "flex text-white"}>
                <p className="font-semibold ml-4 mr-1">occupation:</p>
                <p className="mr-4">{user.occupation}</p>
              </div>
              <div className={mode ? "flex text-black" : "flex text-white"}>
                <p className="font-semibold ml-4 mr-1"> location:</p>
                <p>{user.location}</p>
              </div>
              <div
                className={
                  mode ? "w-72 ml-4 text-black" : "w-72 ml-4 text-white"
                }
              >
                {user.description}
              </div>
            </div>
          </div>
        </section>
        <section className="w-full">
          <hr className="border-gray-500" />
          <Gallery
            setModalData={setModalData}
            photos={photos}
            setComments={setComments}
          />
        </section>
      </div>
    </LayOut>
  );
}
