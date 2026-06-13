import axios from "axios";
import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const UserSignup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const[profilepic, setProfilepic] = useState("")

  const inputRef = useRef(null)


  function handleImage(e) {
      let file = e.target.files[0];
      if (file.size < 100000) {
        toast.success("Image Uploaded");
      } else {
        toast.error("Image must be less than 100KB");
        return;
      }
  
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilepic(reader.result);
      };
  
      reader.readAsDataURL(file);
    }

    function signup(e){
      e.preventDefault()
      const user = {name, email, phone,password,profilepic}
      axios.post(`http://localhost:3000/users`, user)
      .then(()=>{
        toast.success("User Registered")
        setName("")
        setEmail("")
        setPassword("")
        setPhone("")
        setProfilepic("")
        inputRef.current.value = ""; //syntax for useRef hook
      })
      .catch(()=>{
        toast.error("User already exists")
      })
    }

    
  return (
    <>
      <center>
        <h1>User Signup</h1>
        <form className="admin-form" onSubmit={signup}>
          <input
            className="admininput"
            type="text"
            placeholder="Enter Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
          
            type="email"
            placeholder="Enter Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="phone"
            placeholder="Enter Mobile Number"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input type="file" required onChange={handleImage} ref={inputRef}/>
          <button className="adminbtn">Sign Up</button>
          <h6>Account aleady exists? <Link to={'/userlogin'}>Login</Link></h6>
        </form>
      </center>
    </>
  );
};

export default UserSignup;
