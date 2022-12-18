import "../styles/globals.css";
import React, { useEffect } from "react";
import { OrderStore } from "../context";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const use = async () => {
      (await import("tw-elements")).default;
    };
    use();
  }, []);

  return (
    <OrderStore>
      <Component {...pageProps} />
    </OrderStore>
  );
}

export default MyApp;
