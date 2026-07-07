import React , {useState} from "react"


const CRexampleOne = ()=>{
const [auth, setAuth] = useState(false)

return(
<>
<div>
{
auth ? <h1> User Profile </h1> :

<button onClick={ ()=>{setAuth(true)}}> Login </button>

}
</div>
</>
)}

export default CRexampleOne