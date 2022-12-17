const UserPhoto = () => {
  return (
    <div>
      {/* Button trigger modal */}
      {/* Modal */}
      <div
        className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id="exampleModalScrollable"
        tabIndex={-1}
        aria-labelledby="exampleModalScrollableLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable relative w-auto pointer-events-none">
          <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
              <div
                className="text-xl font-medium leading-normal text-gray-800"
                id="exampleModalScrollableLabel"
              ></div>
              <button
                type="button"
                className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body relative p-4">
              <section>
                {/* zurag */}
                {/* <img
                    className="w-full "
                    src={
                      modalData
                        ? `http://localhost:3000/images/${modalData.file_name}`
                        : null
                    }
                  /> */}
              </section>
              <section>
                {/* <div className="flex font-bold">
                    <p>{modalData ? modalData.likes : null}</p>
                    <p className="ml-1">Likes </p>
                  </div> */}
                {/* <div className="text-gray-400 text-sm">
                    {modalData ? modalData.date_time : null}
                  </div> */}
              </section>
              <section>
                <p>comments...</p>
                {/* <div className="w-full ">
                    {modalData
                      ? modalData.comments
                        ? modalData.comments.map((el, i) => (
                            <Comment key={i} el={el} />
                          ))
                        : null
                      : null}
                  </div> */}
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPhoto;
