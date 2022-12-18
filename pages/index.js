import { getAllUsers } from "../lib/api";
import { useState } from "react";
import Header from "../components/general/header";
import UserList from "../components/UserList";

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
