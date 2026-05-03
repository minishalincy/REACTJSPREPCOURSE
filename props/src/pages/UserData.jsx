import React from 'react'

const UserData = (props) => {
  return (
    
    <>
    <h1>Name: {props.username}</h1>
    <h1>Age: {props.age}</h1>
    <h1>Skills: {props.skills}</h1>
    <h1>Address: {props.address.city},{props.address.state}, {props.address.pincode} </h1>
  
    </>
  )
}

export default UserData