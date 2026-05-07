import React, { useState } from 'react'


//MANUAL TOAST NOTIFICATION

// const App = () => {

//   const[toast,setToast] = useState("")

//   function add(){
//     setToast("Item added to cart")

//     setTimeout(() => {
//       setToast("")
//     }, 2000);
//   }
//   return (
//     <>
//     <button onClick={

//       add
//     }>Add Item➕</button>
//     {toast && <ToastNotify toast={toast}/>}
//     </>
//   )
// }


//USING TOAST LIBRARY

import {toast, ToastContainer , } from "react-toastify"

const App=()=>{
  function notification(){
    toast.success("success!")
  }

  function logOut(){
    toast.error("Logged out!")
  }


return(
  <>
    <button onClick={notification}>Login</button> <br />
    <button onClick={logOut}>Logout</button>
    <ToastContainer position='top-center' autoClose={1000}/>
  </>
)
}

export default App