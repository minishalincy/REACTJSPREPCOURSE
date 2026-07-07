import React, { useState } from "react";

const CRTerenary = () => {
  const [state, setState] = useState(false);

  function toggle() {
    setState(!state); //becomes setState(!false); which is setState(true);
  }

  return (
    <>
      <button onClick={toggle}>{state ? "Logout" : "Login"}</button>

      {state && <h1>Welcome</h1>}
    </>
  );
};

export default CRTerenary;
