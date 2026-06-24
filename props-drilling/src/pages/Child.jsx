import React, { useContext } from 'react'
import AppData from '../context/AppContext'

const Child = () => {
 
    let name = useContext(AppData)
  return (
    
    <>
    <h3>This is Child {name}</h3>
    </>
  )
}

export default Child