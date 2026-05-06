import React, { useState } from "react"

const CRUsingShortCircuit = ()=>{

    const[state,setState] = useState(false)

    function toggle(){
        setState(!state)
    }
    return(
        <>
        <center>
        <img height={"200px"} src="https://tse2.mm.bing.net/th/id/OIP.D7hGA_IQyC8J8pBWndsFJQHaJC?pid=Api&P=0&h=180" alt="" />

        <h1>Price:150k</h1>
        <h1>Color:Blue</h1>
        <button onClick={toggle}>{state?"View Less" : "View More"}</button>

        {
            state && <div>
                <p>In my bucket List!</p>
            </div>
        }
        </center>
        </>
    )
}

export default CRShortCircuit