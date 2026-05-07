import React from "react";
import {toast, ToastContainer} from "react-toastify"
const Navbar = ()=>{
    function login(){
        toast.success("Login Successfull")
    }
    function register(){
        toast.success("Registered")
    }
    return(
        <>
       
       
        <div className="nav">
            <div className="left">
                
                <h1>Bucky</h1>
            </div>

            <div className="right">
                <button id="signupBtn" onClick={register}>SignUp</button>
                <button onClick={login}>Login</button>
                <ToastContainer autoClose={1000} position="top-center"/>
            </div>
        </div>
    
      
        </>
    )
}

export default Navbar