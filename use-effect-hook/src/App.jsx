import React, { useEffect, useState } from "react";
import ControlledFormComponent from "./components/ControlledFormComponent";

const App = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((x) => x.json())
      .then((y) => setUsers(y));
  }, []); //[] dependencies to execute

  return (
    <>
      <a href="" style={{color:"white"}}><center className="user">Users</center></a>
      <div className="container">
        {users.map((m) => {
          return (
            <div className="card" key={m.id}>
              <h3>ID: {m.id}</h3>

              <img src={m.avatar_url} alt="" />

              <h2>Username: {m.login}</h2>

              <h4>Type: {m.type}</h4>

              <button>Add</button>
            </div>
          );
        })}
      </div>
      <ControlledFormComponent/>
    </>
  );
};

export default App; 
