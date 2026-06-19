import React from "react";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();

  function logout() {
    localStorage.clear();
    navigate("/");
  }

  return (
    <>
      <center>
        <h1>Home page</h1>
        <button className="logout-btn" onClick={logout}>
          Log out
        </button>
      </center>
    </>
  );
};

export default Homepage;
