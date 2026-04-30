import React from 'react'

const ReduceExample = () => {
    let num = [29,56,35,24]
    let res = num.reduce((acc,val)=>{
        return acc + val
    },0)
  return (
    <>
    <h1>Reduce Example</h1>
    <h3>{res}</h3>
    </>
  )
}

export default ReduceExample