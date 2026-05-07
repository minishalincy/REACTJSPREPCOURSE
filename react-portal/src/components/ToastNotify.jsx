import React from "react"
import ReactDOM from "react-dom"

const ToastNotify =()=>{
    
   return ReactDOM.createPortal(
    <div>
        {/* <h4>{props.toast}</h4> */}
       
    </div>, document.getElementById("portal")
   )
}

export default ToastNotify