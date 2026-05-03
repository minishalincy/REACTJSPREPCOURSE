import React from 'react'
import UserData from './pages/UserData'

const App = () => {

  let username = "Minisha"
  let age = 21
  let skills = ["MongoDB", "Expressjs", "Reactjs", "Nodejs"]
  let address = {
    city: "bangalore",
    state: "karnataka",
    pincode: "560105"
  }
  return (
    <>
    <UserData name={username} age={age} skills={skills.join(",")} address={address} />
    </>
  )
}

export default App