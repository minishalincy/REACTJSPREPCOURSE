import React, { useState } from "react";
import SignUp from "./components/SignUp";
import Login from "./components/Login";

const App = () => {
  const [signUp, setSignUp] = useState(false);
  const [login, setLogin] = useState(false)
  return (
    <>
      <button id="signUpBtn" onClick={() => setSignUp(true)}>SignUp</button>
      {signUp && <SignUp setSignUp={setSignUp} />}


      <button id="signUpBtn" onClick={() => setLogin(true)}>Login</button>
      {login && <Login setLogin={setLogin} />}
    </>
  );
};

export default App;
