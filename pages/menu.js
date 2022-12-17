import LayOut from "../components/layout/layout";
import UserPhoto from "../components/user-photo/user.photo";

const Menu = () => {
  return (
    <LayOut>
      <div className="text-gray-700 w-full mx-auto ">
        <section>
          <div>
            <UserPhoto />
          </div>
        </section>
      </div>
    </LayOut>
  );
};

export default Menu;
