import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { toast } from "react-toastify";
import axios from "axios";

const AddStudent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dept, setDept] = useState("");
  const [course, setCourse] = useState("");

  function handleForm(e) {
    e.preventDefault();

    const studentData = {
      name,
      email,
      dept,
      course,
    };

    axios
      .post("http://localhost:3000/studentData", studentData)
      .then(() => {
        toast.success("Student Added");

        setName("");
        setEmail("");
        setDept("");
        setCourse("");
      })
      .catch((err) => {
        toast.error("Failed..");
        console.log(err);
      });
  }

  return (
    <>
      <Navbar />

      <center>
        <h1>Add Student here!</h1>

        <form onSubmit={handleForm}>
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

          <button type="submit">Add</button>
        </form>
      </center>
    </>
  );
};

export default AddStudent;