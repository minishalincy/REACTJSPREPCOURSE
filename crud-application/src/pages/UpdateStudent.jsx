import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import {toast} from 'react-toastify'

const UpdateStudent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dept, setDept] = useState("");
  const [course, setCourse] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3000/studentData/${id}`).then((x) => {
      setName(x.data.name);
      setEmail(x.data.email);
      setDept(x.data.dept);
      setCourse(x.data.course);
    });
  }, []);


  function handleUpdate(e){
    e.preventDefault()
    let newData = {name,email,dept,course}
    axios.put(`http://localhost:3000/studentData/${id}`, newData)
    .then(()=>{
      toast.success("Updated..")
      navigate("/viewstudent")
    })
    .catch(err=>{
      toast.error("Failed to Update")
    })
  }
  return (
    <>
      <Navbar />
      <center>
        <h1>Update Student</h1>
      </center>
      <center>
        <form onSubmit={handleUpdate}>
          <label htmlFor="name">Name: </label>
          <input
            id="name"
            type="text"
            placeholder="Enter Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <br />
          <br />

          <label htmlFor="email">Email: </label>
          <input
            id="email"
            type="text"
            placeholder="Enter Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <br />
          <br />

          <label htmlFor="dept">Department: </label>
          <input
            id="dept"
            type="text"
            placeholder="Enter Department"
            required
            value={dept}
            onChange={(e) => setDept(e.target.value)}
          />

          <br />
          <br />

          <label htmlFor="course">Course: </label>
          <input
            id="course"
            type="text"
            placeholder="Enter Course"
            required
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          />

          <br />
          <br />

          <button>Update</button>
        </form>
      </center>
    </>
  );
};

export default UpdateStudent;
