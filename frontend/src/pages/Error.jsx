import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
   <>
   <Link to={"*"}><img
  src="https://www.sumydesigns.com/wp-content/uploads/2019/03/404-error.jpg"
  alt="404 Error"
  style={{
    width: "100vw",
    height: "100vh",
    objectFit: "cover",
  }}
/></Link>
   </>
  )
}

export default Error