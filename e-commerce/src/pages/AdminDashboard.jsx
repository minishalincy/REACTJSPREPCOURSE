import React from "react";
import { useState , useRef} from "react";
import {toast} from "react-toastify"
import axios from "axios"

const AdminDashboard = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [ratings, setRatings] = useState("");

  const inputRef = useRef(null)

  function handleImage(e){
    let file = e.target.files[0]
    if(file.size < 100000){
        toast.success("Image Uploaded")
    }else{
        toast.error("Image must be less than 100KB")
        return
    }

    const reader = new FileReader()
    reader.onloadend = ()=>{
        setImage(reader.result)
    }

    reader.readAsDataURL(file)
  }

  function addProduct(e){
    e.preventDefault()
    const products = {id,name,price,category,description,image,ratings}
    axios.post(`http://localhost:3000/products`, products)
    .then(()=>{
        toast.success("Product added")
        setId("")
        setName("")
        setCategory("")
        setDescription("")
        setPrice("")
        setImage("")
        setRatings("")
        inputRef.current.value = ""
    })
    .catch(()=>toast.error("Failed to Added"))
  }
  return (
    <>
      <center>
        <h1>Welcome to Dashboard!</h1>

        <form onSubmit={addProduct} className="admin-form">
            <h2>Add <span style={{color: "green"}}>Product</span></h2>
          <input
            type="text"
            placeholder="Enter Product ID"
            required
            value={id}
            onChange={(e) => setId(e.target.value)}
          />{" "}
          <br />
          <input
            type="text"
            placeholder="Enter Product Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />{" "}
          <br />
          <input
            type="text"
            placeholder="Enter Category"
            required
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />{" "}
          <br />
          <input
            type="text"
            placeholder="Enter Price"
            required
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />{" "}
          <br />
          <textarea
            placeholder="Enter Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>{" "}
          <br />
          <input type="file" required onChange={handleImage} ref={inputRef}/> <br />
          <input
            type="text"
            placeholder="Enter Ratings"
            value={ratings}
            onChange={(e) => setRatings(e.target.value)}
          />{" "}
          <br /> <br />
          <button className="adminbtn" >Add Product</button>
        </form>
      </center>
    </>
  );
};

export default AdminDashboard;
