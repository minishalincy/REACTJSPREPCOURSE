import React from "react";

const SignUp = (props) => {
  return (
    <>
      <div className="overlay">
        <div className="modal">
          <h1 className="signUpText">SignUp</h1>
          <input type="text" placeholder="Enter Username" /> <br /> 
          <input type="email" placeholder="Enter email" /> <br /> 
          <input type="password" placeholder="Enter password" /><br /> 
          <button>Signup</button> 
          <button onClick={()=>{props.setSignUp(false)}} style={{background:"maroon"}}>Cancle</button>
        </div>
      </div>
    </>
  );
};

export default SignUp;
