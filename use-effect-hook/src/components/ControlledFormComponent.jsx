import React, { useState } from 'react'

const ControlledFormComponent = () => {

  const [user, setUser] = useState("")

  function userData(e) {
    setUser(e.target.value)
  }

  return (
    <>
      <center>
        <h1>Name: {user}</h1>

        <form>
          <input
            type="text"
            placeholder="Enter name"
            value={user}
            onChange={userData}
          />
        </form>
      </center>
    </>
  )
}

export default ControlledFormComponent