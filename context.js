import React, { useState, createContext } from "react";

const Context = createContext();
const initialState = {};

export const OrderStore = (props) => {
  const [state, setState] = useState(initialState);
  const [mode, setMode] = useState(false);

  return (
    <Context.Provider
      value={{
        state,
        setState,
        mode,
        setMode,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default Context;
