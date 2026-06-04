import React from "react";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";

const ViewStudent = () => {


  const [students, setStudents] = useState([])
  function fetchStudents() {
    axios
      .get("http://localhost:3000/studentData")
      .then((x) => setStudents(x.data))
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <>
      <Navbar />


    {/* <h1 className="heading">View Student here!</h1> */}

    <div className="studentcontainer">
      {
        students.map((x) => {
          return (
            <div className="card">
              <p><b>Name:</b> {x.name}</p>
              <p><b>Email:</b> {x.email}</p>
              <p><b>Department:</b> {x.dept}</p>
              <p><b>Course:</b> {x.course}</p>

              <div className="btns">
                <button>Edit</button>
                <button>Delete</button>
              </div>

            </div>
          );
        })
      }
    </div>
  </>
);
  }

export default ViewStudent;
