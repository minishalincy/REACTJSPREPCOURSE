import React from "react";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ViewStudent = () => {
  const navigate = useNavigate();
  const [students, setStudents] = useState([]);
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

  function handleUpdate(id) {
    navigate(`/updatestudent/${id}`);
  }

  function handleDelete(id) {
    axios
      .delete(`http://localhost:3000/studentData/${id}`)
      .then(() => {
        toast.success("Delete successfully");
        fetchStudents()
      })
      .catch((err) => {
        toast.error("Failed to delete");
      });
  }
  return (
    <>
      <Navbar />

      {/* <h1 className="heading">View Student here!</h1> */}

      <div className="studentcontainer">
        {students.map((x) => {
          return (
            <div className="card">
              <p>
                <b>Name:</b> {x.name}
              </p>
              <p>
                <b>Email:</b> {x.email}
              </p>
              <p>
                <b>Department:</b> {x.dept}
              </p>
              <p>
                <b>Course:</b> {x.course}
              </p>

              <div className="btns">
                <button  onClick={()=>{handleUpdate(x.id)}}>Edit</button>
                <button onClick={()=>{handleDelete(x.id)}}>Delete</button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ViewStudent;
