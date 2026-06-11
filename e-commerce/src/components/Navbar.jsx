import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className="nav">
        <div className="left">
          {/* <img className="logo" src="./public/favicon.svg" /> */}
          <h1>Logo</h1>
        </div>

        <div className="right">
          <Link to="adminlogin"><h1>Admin</h1></Link>
          <Link to=""><h1>User</h1></Link>
        </div>
      </div>
    </>
  )
}

export default Navbar