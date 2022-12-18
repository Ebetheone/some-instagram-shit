const Gallery = ({ photos, setModalData, setComments }) => {
  return (
    <div className="w-full">
      <section className="overflow-hidden text-gray-700 ">
        <div className=" px-5 py-2 mx-auto lg:pt-12 lg:px-0">
          <div className="flex flex-wrap justify-start -m-1 md:-m-2">
            {photos.map((el, i) => (
              <div
                key={i}
                className="cursor-pointer flex flex-wrap w-1/3 "
                onClick={() => {
                  setComments(el.comments);
                  setModalData(el);
                }}
                data-bs-toggle="modal"
                data-bs-target="#exampleModalScrollable"
              >
                <div className="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block object-cover object-center w-full h-40 xl:h-60 opacity-100 hover:opacity-60 transition duration-300 ease-in-out"
                    src={`http://localhost:3000/images/${el.file_name}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
