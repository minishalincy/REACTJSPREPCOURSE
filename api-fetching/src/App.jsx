import React, { useEffect, useState } from "react";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((x) => x.json())
      .then((y) => setUsers(y.users))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      {users.map((m) => {
        return (
          <div key={m.id}>
            <h1>First Name: {m.firstName}</h1>
            <h1>Last Name: {m.lastName}</h1>
            <img src={m.image} alt="" />
            <h4>{m.height}</h4>
            <h4>{m.bloodGroup}</h4>
          </div>
        );
      })}
    </>
  );
};

export default App;
