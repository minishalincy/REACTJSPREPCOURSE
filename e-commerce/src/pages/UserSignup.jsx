import React, { useState } from "react";

const UserSignup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const[profilepic, setProfilepic] = useState("")


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

    
  return (
    <>
      <center>
        <h1>User Signup</h1>
        <form className="admin-form">
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
          <input type="file" required onChange={handleImage}/>
          <button className="adminbtn">Sign Up</button>
        </form>
      </center>
    </>
  );
};

export default UserSignup;
