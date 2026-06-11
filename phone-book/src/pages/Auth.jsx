import React from "react";
import { useState } from "react";
import {toast} from "react-toastify"

const Auth = () => {
  const [passcode, setPasscode] = useState("");
  const Passcode = "2507";
  function setKey() {
    if (Passcode === passcode) {
        toast.success("Welcome")
    }else{
      toast.error("Access denied")
    }
  }

  return (
    <>
      <center>
        <div className="authCard">
          <h1>Enter Passcode</h1> <br />
          <input
            type="password"
            placeholder="Enter passcode"
            required
            value={passcode}
            onChange={(e)=>{setPasscode(e.target.value)}}
          /> <br /> <br />
          <button onClick={setKey}>Enter</button>
        </div>
      </center>
    </>
  );
};

export default Auth;
