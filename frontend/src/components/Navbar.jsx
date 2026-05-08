import React from "react";
import {toast, ToastContainer} from "react-toastify"
import { Link } from "react-router-dom";

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
                
<Link to={"/"}>
  <img className="logo" src="/BuckyLogo.png" alt="Bucky Logo" />
</Link>            </div>

            <div className="right">
               <Link to={"signup"}> <button id="signupBtn" onClick={register}>SignUp</button></Link>
                <Link to={"Login"}><button onClick={login}>Login</button></Link>
                <ToastContainer autoClose={1000} position="top-center"/>
            </div>
        </div>
    
      
        </>
    )
}

export default Navbar