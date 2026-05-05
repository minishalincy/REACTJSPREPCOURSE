import React, { useState } from "react";

const UseStateP = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  let handleSubmit = (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      setMessage("Please fill");
    } else if (password.length < 6) {
      setMessage("password must contain 8 characters");
    } else {
      setMessage("Login successfull");
    }
  };

  return (
    <>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />{" "}
        <br />
        <br /> <button type="submit">Login</button>
      </form>
      <p>{message}</p>
    </>
  );
};

export default UseStateP;
