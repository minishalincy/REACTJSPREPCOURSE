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
          <Link to="/"><button>Home</button></Link>
          <Link to="/addstudent"><button>Add</button></Link>
          <Link to="/viewstudent"><button>View</button></Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;