import Footer from "../general/footer";
import NavBar from "../general/navbar";

const LayOut = ({ children }) => {
  return (
    <div className="flex">
      <div className="bg-black h-screen ">
        <NavBar />
      </div>
      <section className="w-2/3 mx-auto">{children}</section>
    </div>
  );
};

export default LayOut;
