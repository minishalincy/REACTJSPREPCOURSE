import React, { useEffect } from "react";
import { useState, useRef } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


const AdminDashboard = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [ratings, setRatings] = useState("");

  const inputRef = useRef(null);

  let navigate = useNavigate();

  function handleImage(e) {
    let file = e.target.files[0];
    if (file.size < 100000) {
      toast.success("Image Uploaded");
    } else {
      toast.error("Image must be less than 100KB");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };

    reader.readAsDataURL(file);
  }

  function addProduct(e) {
    e.preventDefault();
    const products = { id, name, price, category, description, image, ratings };
    axios
      .post(`http://localhost:3000/products`, products)
      .then(() => {
        toast.success("Product added");
        setId("");
        setName("");
        setCategory("");
        setDescription("");
        setPrice("");
        setImage("");
        setRatings("");
        inputRef.current.value = "";
      })
      .catch(() => toast.error("Failed to Added"));
  }
  return (
    <>
    <div className="adminnav">
    <Link to={"/"}><h3>🠄 Back to home page</h3> </Link>
      <button
        onClick={() => {
          navigate("/addedproducts");
        }}
        className="adminbtn"
      >
        View Added Products
      </button>

      </div>
      <center>
        <h1>Welcome to Dashboard!</h1>

        <form onSubmit={addProduct} className="admin-form">
          <h2>
            Add <span style={{ color: "green" }}>Product</span>
          </h2>
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
            placeholder="Enter Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />{" "}
          <br />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">Select Category</option>
            <option value="1">Mobiles</option>
            <option value="2">Laptops</option>
            <option value="3">Electronics</option>
            <option value="4">Fashion</option>
            <option value="5">Home & Kitchen</option>
          </select>{" "}
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
          <input
            type="file"
            required
            onChange={handleImage}
            ref={inputRef}
          />{" "}
          <br />
          <select
            value={ratings}
            onChange={(e) => setRatings(e.target.value)}
            required
          >
            <option value="">Select Rating</option>
            <option value="1">⭐ 1 Star</option>
            <option value="2">⭐⭐ 2 Stars</option>
            <option value="3">⭐⭐⭐ 3 Stars</option>
            <option value="4">⭐⭐⭐⭐ 4 Stars</option>
            <option value="5">⭐⭐⭐⭐⭐ 5 Stars</option>
          </select>{" "}
          <br /> <br />
          <button className="adminbtn">Add Product</button>
        </form>
      </center>
    </>
  );
};

export default AdminDashboard;
