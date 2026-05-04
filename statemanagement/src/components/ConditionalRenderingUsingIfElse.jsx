import React, { useState } from 'react'

const ConditionalRenderingUsingIfElse = () => {

    const[change, setChange] = useState(false)
    let message
    
    if(change){
        message = <h1>Welcome</h1>
    }else{
        message = <h1>Login...</h1>
    }

    function toggle(){
        setChange(!change)
    }
  return (
   
    <>
        <h2>{message}</h2>
        <button onClick={toggle}>Click</button>
    </>
  )
}

export default ConditionalRenderingUsingIfElse