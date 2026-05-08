import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
   <>
   <Navbar/>
   <Link to={"error"}><img width={"100%"} height={"400px"} src="https://www.sumydesigns.com/wp-content/uploads/2019/03/404-error.jpg" alt="" /></Link>
   </>
  )
}

export default Error