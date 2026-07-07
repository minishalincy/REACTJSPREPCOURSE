import React, { useState } from "react";

const CRTernaryTwo = () => {
  const [show, setShow] = useState(false);

  function hide() {
    setShow(!show);
  }

  return (
    <>
      <div>
        <input type={show ? "text" : "password"} />
        <button onClick={hide}>
          {show ? "Hide" : "Show"}
        </button>
      </div>
    </>
  );
};

export default CRTernaryTwo;