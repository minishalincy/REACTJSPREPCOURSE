import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [address, setAddress] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:3000/products/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Failed to load product");
      });
  }, [id]);

  function increment() {
    setQuantity(quantity + 1);
  }

  function decrement() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  function logout() {
    localStorage.clear();
    navigate("/");
  }

  function placeOrder(e) {
    e.preventDefault();

    if (!address.trim()) {
      toast.error("Please enter delivery address");
      return;
    }

    const orderData = {
      userId: localStorage.getItem("id"),
      productId: product.id,
      productName: product.name,
      productImage: product.image,
      quantity: quantity,
      price: product.price,
      total: quantity * product.price,
      date: new Date().toLocaleDateString(),
      address: address,
      status: "Pending",
    };

    axios
      .post("http://localhost:3000/orders", orderData)
      .then(() => {
        toast.success("Order Placed Successfully");
        navigate("/userdashboard");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Failed to place order");
      });
  }

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
  <div>
      <center>
        <h1>{product.name}</h1>
      </center>

      <img
        src={product.image}
        alt={product.name}
        height="250px"
        width="250px"
      />

      <h4>{product.description}</h4>
      <h2>₹{product.price}</h2>

      <div>
        <button onClick={decrement} className="incBtn">
          -
        </button> 
        {quantity}
        <button onClick={increment} className="incBtn">
          +
        </button>
      </div>

      <form onSubmit={placeOrder}>
        <br />

        <textarea
          placeholder="Enter Delivery Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />

        <br />
        <br />

        <button type="submit" className="adminbtn">
          Place Order
        </button>
      </form>
      </div>
    </>
  );
};

export default ProductDetail;
