import React, { useState } from "react";

const CRUsingIfElse = () => {
  const [change, setChange] = useState(false);
  let message;

  //conditions
  if (change) {
    message = "Welcome";
  } else {
    message = <h1>Login...</h1>;
  }

  function toggle() {
    setChange(true);
  }


  return (
    <>
      {/* rendering the message */}
      <h1>{message}</h1>
      <button onClick={toggle}>Click</button>
    </>
  );
};

export default CRUsingIfElse;
