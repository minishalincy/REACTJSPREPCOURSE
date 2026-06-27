import React, { useState } from 'react'

const ExampleOne = () => {
  const[age, setAge] = useState(21)

  function inc(){
    setAge(a => a + 1); //this is called Passing the updater function 
  }
  return (
   <>
   <h1>Your age: {age}</h1>
   <button onClick={()=>{inc(),inc(),inc()}}>+3</button>
   </>
  )
}

export default ExampleOne