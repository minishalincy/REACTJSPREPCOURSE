import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()

    function example1(){
        navigate("/example1")
    }

     function example2(){
        navigate("/example2")
    }
  return (
   <>
   <h1>This is Home Page</h1>
   <button onClick={example1}>Example 1</button>
   <button onClick={example1}>Example 2</button>
   </>
  )
}

export default Home