import React from 'react'


const Navbar = () => {
  return (
    <>
    <div className="nav">
        <div className="left">
          {/* <img className="logo" src="./public/favicon.svg" /> */}
          <h1>Apple</h1>
        </div>

        <div className="right">
             <h1>Home</h1>
          <h1>🛒</h1>
          <h1 style={{fontWeight:"extrabold"}}>:</h1>
        </div>
      </div>
    </>
  )
}

export default Navbar