import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function loginLogic(e) {
    e.preventDefault();
    if (email === "mini@gmail.com" && password === "mini") {
      toast.success("Login Success");
      localStorage.setItem("loggedIn", true)
      navigate("/home");
    } else {
      toast.error("Invalid Credentials");
    }
  }
  return (
    <>
      <center>
        <h1>Login page</h1>
      </center>

      <center>
        <form onSubmit={loginLogic} className="login-form">
          <input
            type="email"
            placeholder="Enter Email"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />{" "}
          <br /> <br />
          <input
            type="password"
            placeholder="Enter Password"
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />{" "}
          <br /> <br />
          <button className="login-btn">Login</button>
        </form>
      </center>
    </>
  );
};

export default Login;
