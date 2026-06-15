import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


const AddedProducts = () => {
  const [products, setProducts] = useState([]);

  let navigate = useNavigate()

  function fetchData() {
    axios
      .get(`http://localhost:3000/products`)
      .then((x) => setProducts(x.data)) //x.data contains the response data
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
    <div className="adminnav">
      <Link to='/admindashboard'><h3>🠄</h3></Link>
    <button
        onClick={() => {
          navigate("/admindashboard");
        }}
        className="adminbtn"
      >Dashboard</button>
      </div>
      <center>
        <h1>Product List</h1>
        <div className="cardcontainer">
        {products.map((x) => {
          return (
            <div className="products">
            <div className="card">
              <img src={x.image} height={"200px"} alt="" />
            </div>
            </div>
           
          );
        })}
        </div>
         </center>

      
    </>
  );
};

export default AddedProducts;
