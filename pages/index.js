import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { getAllUsers } from "../lib/api";
import { useRouter } from "next/router";
import { useState } from "react";
import Users from "../components/home-user/Users";
import LayOut from "../components/layout/layout";
export const getServerSideProps = async () => {
  const users = await getAllUsers();

  return { props: { users } };
};
export default function Home({ users }) {
  const router = useRouter();
  const [search, setSearch] = useState("");
  return (
    <LayOut>
      <div className="text-gray-700 w-full mx-auto ">
        <div className="py-4">
          <div className="flex justify-center">
            <div className="mb-3 xl:w-96">
              <input
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                type="text"
                className="
  form-control
  block
  w-full
  px-3
  py-1.5
  text-base
  font-normal
  text-gray-700
  bg-white bg-clip-padding
  border border-solid border-gray-300
  rounded
  transition
  ease-in-out
  m-0
  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
"
                id="exampleFormControlInput1"
                placeholder="search.."
              />
            </div>
          </div>
        </div>
        <div className="w-2/3 mx-auto flex flex-wrap justify-center">
          {users.map((el, i) =>
            el.first_name.toLowerCase().search(search.toLowerCase()) > -1 ? (
              <Users key={i} el={el} />
            ) : null
          )}
        </div>
      </div>
    </LayOut>
  );
}
