import React, { useContext } from "react";
import Header from "./general/header";
import Context from "../context";

const LayOut = ({ children }) => {
  const ctx = useContext(Context);
  const mode = ctx.mode;

  return (
    <div className={mode ? "bg-white" : "bg-black"}>
      <Header />
      <section className=" mx-auto">{children}</section>
    </div>
  );
};

export default LayOut;
