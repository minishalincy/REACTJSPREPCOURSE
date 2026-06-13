import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  function login(e) {
    e.preventDefault();
    axios.get(`http://localhost:3000/users`).then((x) => {
      let users = x.data;
      let result = users.find((x) => {
        return x.email === email && x.password === password;
      });
      if (result) {
        toast.success("Login Successful");
        setEmail("");
        setPassword("");
        localStorage.setItem("id",result.id)
        localStorage.setItem("email",result.email)
        localStorage.setItem("loggedIn", true)
        navigate("/userdashboard");
      } else {
        toast.error("Failed");
      }
    });
  }

  return (
    <>
      <center>
        <h1>User Login</h1>

        <form className="admin-form" onSubmit={login}>
          <input
            type="email"
            placeholder="Enter Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />{" "}
          <br />
          <input
            type="password"
            placeholder="Enter Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />{" "}
          <br />
          <button className="adminbtn">Login</button>
          <h6>
            New User? <Link to={"/usersignup"}>SignUp</Link>
          </h6>
        </form>
      </center>
    </>
  );
};

export default UserLogin;
