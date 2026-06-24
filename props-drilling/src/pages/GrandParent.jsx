import React from "react";
import Parent from "./Parent";

const GrandParent = () => {
  return (
    <>
      <h1>This is GrandParent</h1>
      <Parent />
    </>
  );
};

export default GrandParent;
