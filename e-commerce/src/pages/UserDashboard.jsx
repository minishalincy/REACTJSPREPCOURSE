import React, { use } from 'react'
import { useNavigate } from 'react-router-dom';

const UserDashboard = () => {

  const navigate = useNavigate()

  function logout(e){
    localStorage.clear()
  }
  return (
    <>
    <div className='adminnav'>
      <h2 style={{color:"white"}}>Bucky🧺</h2>
      <button onClick={() => {
          navigate("/");
        }}
        className="logoutbtn">Log out</button>
    </div>

    <center><h1>Welcome to Dashboard</h1>
    </center>
    </>
  )
}

export default UserDashboard