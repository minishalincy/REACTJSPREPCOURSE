import React from "react";
import { useState } from "react";
import {toast} from "react-toastify"
import {useNavigate} from "react-router-dom"

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  function adminLogin(e){
    e.preventDefault()
    if(email === "a@gmail.com" && password === "a"){
        toast.success("Login success")
        navigate("/admindashboard")
    } else{
        toast.error("Invalid Credentials")
    }
  }
  return (
    <>
    
      <center>
        <h1>Admin Login</h1>
      
      <form onSubmit={adminLogin} className="admin-form">
        <input className="admininput"
          type="text"
          placeholder="Enter email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />{" "}
        <br /> <br />
        <input className="admininput"
          type="password"
          placeholder="Enter password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />{" "}
        <br /> <br />
        <button className="adminbtn">Login</button>
      </form>
      </center>
    </>
  );
};

export default AdminLogin;
