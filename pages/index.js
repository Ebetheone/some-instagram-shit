import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { getAllUsers } from "../lib/api";
import { useRouter } from "next/router";
import { useState } from "react";
import Users from "../components/home-user/Users";
import LayOut from "../components/layout";
import Header from "../components/general/header";
import UserList from "../components/UserList";
import Feed from "../components/Feed";

export const getServerSideProps = async () => {
  const users = await getAllUsers();
  return { props: { users } };
};

export default function Home({ users }) {
  const [search, setSearch] = useState("");
  return (
    <div>
      <Header setSearch={setSearch} />
      <UserList search={search} users={users} />
    </div>
  );
}
