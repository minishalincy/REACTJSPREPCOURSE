import React, { useState } from "react";

const UseStateE = () => {
  const [state, setState] = useState("minisha");

  function change() {
    setState("Lincy");
  }
  return (
    <>
      <h1>{state}</h1>
      <button onClick={change}>Click</button>
    </>
  );
};

export default UseStateE;
