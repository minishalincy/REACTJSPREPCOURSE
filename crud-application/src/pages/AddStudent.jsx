import React, { useState } from "react";
import Navbar from "../components/Navbar";

const AddStudent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dept, setDept] = useState("");
  const [course, setCourse] = useState("");

  return (
    <>
      <Navbar />

      <center>
        <h1>Add Student here!</h1>

        <form>
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
        </form>
      </center>
    </>
  );
};

export default AddStudent;
