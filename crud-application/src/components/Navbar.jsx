import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="nav">
        <div className="left">
          {/* <img className="logo" src="/" /> */}
        </div>

        <div className="right">
          <Link to="/"><h1>Home</h1></Link>
          <Link to="/addstudent"><h1>Add</h1></Link>
          <Link to="/viewstudent"><h1>View</h1></Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;