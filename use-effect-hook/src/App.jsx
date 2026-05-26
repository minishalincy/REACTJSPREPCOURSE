import React, { useEffect, useState } from 'react'

const App = ()=>{
  
  const [users, setUsers] = useState([])
  useEffect(()=>{
    fetch("https://api.github.com/users")
    .then(x=> x.json())
    .then(y => setUsers(y))
  },[]) //[] dependencies to execute

  return(
    <>

    <div className="container">
      {/* <center>Users</center> */}
  {
    users.map((m) => {
      return (
        <div className="card" key={m.id}>
          <h3>ID: {m.id}</h3>

          <img src={m.avatar_url} alt="" />

          <h2>Username: {m.login}</h2>

          <h4>Type: {m.type}</h4>

          <button>Add</button>
        </div>
      )
    })
  }
</div>
    </>
  )
}

export default App