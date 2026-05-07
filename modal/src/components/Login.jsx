import React from "react";

const Login = (props) => {
  return (
    <>
      <div className="overlay">
        <div className="modal">
          <h1 className="signUpText">Login</h1>

          <input type="text" placeholder="Enter Username" /> <br />
          <input type="email" placeholder="Enter email" /> <br />
          <input type="password" placeholder="Enter password" /> <br />

          <button>Login</button>

          <button
            onClick={() => {
              props.setLogin(false);
            }}
            style={{ background: "maroon" }}
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default Login