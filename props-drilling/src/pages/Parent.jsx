import React, { useContext } from 'react'
import AppData from '../context/AppContext'
import Child from './Child'

const Parent = () => {
 
    let abc = useContext(AppData)
  return (
    
    <>
    <h3>This is Parent {abc}</h3>
    <Child/>
    </>
  )
}

export default Parent