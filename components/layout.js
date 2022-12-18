import Header from "./general/header";

const LayOut = ({ children }) => {
  return (
    <div className="bg-gray-100">
      <Header />
      <section className=" mx-auto">{children}</section>
    </div>
  );
};

export default LayOut;
