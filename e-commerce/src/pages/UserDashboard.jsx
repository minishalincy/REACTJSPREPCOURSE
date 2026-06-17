import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const UserDashboard = () => {

  const[user, setUser] = useState({})
  const[products, setProducts] = useState([])
  const[filterproduct, setFilterproduct] = useState("")
  const navigate = useNavigate();

  function logout(e) {
    localStorage.clear();
    navigate("/");
  }

let loggedInID = localStorage.getItem("id")

useEffect(()=>{
  axios.get(`http://localhost:3000/users/${loggedInID}`)
  .then(x=>setUser(x.data)
  )
  .catch(()=>toast.error("Failed to fetch"))

},[])

function fetchProducts(){
  axios.get(`http://localhost:3000/products`)
  .then((x)=>setProducts(x.data)
)
.catch(()=>{
  toast.error("Failed to load Products")
})
}

useEffect(()=>{
  fetchProducts()
},[])

let filteredProducts = products.filter((x) => {
    return x.name.toLowerCase().startsWith(filterproduct.toLowerCase()); //can use includes() method too
  });
  return (
    <>
      <div className="adminnav">
        <h2 style={{ color: "white" }}>Bucky🧺</h2>
        <div className="right">
          <h1>Products</h1>

          <h1>Orders</h1>

          <button onClick={logout} className="logoutbtn">
            Log out
          </button>
        </div>
      </div>
        <center>
        <div className="profile-container">
        <img src={user.profilepic} className="profile" alt="" />
        <div className="welcometext">   
        <h1 >Welcome, {user.name}</h1>
        </div> 
        </div>  
        </center>
        <center>
          <input type="text" placeholder="search 🔍" className="searchInput" value={filterproduct}
        onChange={(x) => {
          setFilterproduct(x.target.value)}}/> <br />
        <button className="catbtn">Electronics</button>
        <button className="catbtn">Makeup</button>
        <button className="catbtn">Shoes</button>
</center>

<center><h1>Products</h1></center>
<div className="cardcontainer">
  {filteredProducts.length > 0 ? (
    filteredProducts.map((x) => (
      <div className="cards">
        <img src={x.image} height="200px" alt="" />
        <h3>{x.name}</h3>

        <button
          className="adminbtn"
          onClick={() => navigate(`productdetail/${x.id}`)}
        >
          View Product
        </button>
      </div>
    ))
  ) : (
    <center><h4 style={{color:"maroon"}}>Result not found</h4></center>
    
  )}
</div>
      
    </>
  );
};

export default UserDashboard;
