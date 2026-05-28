import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");

  function userData(e) {
    setName(e.target.value);
  }

  function emailData(e) {
    setEmail(e.target.value);
  }

  function mobileData(e) {
    setMobile(e.target.value);
  }

  function passwordData(e) {
    setPassword(e.target.value);
  }

  function handleForm(e){
    e.preventDefault()

    let data={name,email,mobile,password} //store all the state variables in an object
    axios.post("http://localhost:3000/users" , data) //pushing the data
    .then(()=>toast.success("User added"))
    setName("") //empty after the user gets added
    setEmail("")
    setMobile("")
    setPassword("")
    .catch((err)=>{console.log(err);
    })
  }

  return (
    <>
      <center>
        <h1>Add user</h1>
      </center>
      <center>
        <form onSubmit={handleForm}>
          <input
            type="text"
            placeholder="Enter Name"
            required
            value={name}
            onChange={userData}
          />
          <br /> <br />
          <input
            type="email"
            placeholder="Enter Email"
            required
            value={email}
            onChange={emailData}
          />
          <br /> <br />
          <input
            type="text"
            placeholder="Enter Mobile Number"
            required
            value={mobile}
            onChange={mobileData}
          />
          <br /> <br />
          <input
            type="password"
            placeholder="Enter Password"
            required
            value={password}
            onChange={passwordData}
          />
          <br /> <br />
          <button>Add</button>
        </form>
      </center>
    </>
  );
};

export default App;

/*

import React, { useState } from "react";

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });

  // Single handler for all inputs
  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  // Form submit
  function handleSubmit(e) {
    e.preventDefault();

    console.log(formData);

    // Optional: clear form after submit
    setFormData({
      name: "",
      email: "",
      mobile: "",
      password: "",
    });
  }

  return (
    <>
      <center>
        <h1>Add User</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            required
            value={formData.name}
            onChange={handleChange}
          />
          <br />
          <br />

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <br />
          <br />

          <input
            type="text"
            name="mobile"
            placeholder="Enter Mobile Number"
            required
            value={formData.mobile}
            onChange={handleChange}
          />
          <br />
          <br />

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            required
            value={formData.password}
            onChange={handleChange}
          />
          <br />
          <br />

          <button type="submit">Add</button>
        </form>
      </center>
    </>
  );
};

export default App;

*/
