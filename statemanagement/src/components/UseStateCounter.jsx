import React, { useState } from 'react'

const UseStateCounter = () => {

    const[count,setCount] = useState(0)

    function inc(){
        setCount(count+1)
    }

    function dec(){
        if(count > 0){
        setCount(count-1)
        }
    }

    function reset(){
        setCount(0)
    }
  return (
    <>
    <h3>{count}</h3>
    <button onClick={inc}>Increment</button>
    <button onClick={dec}>Decrement</button>
    <button onClick={reset}>Reset</button>
    </>
  )
}

export default UseStateCounter