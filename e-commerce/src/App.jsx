import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import AddedProducts from "./pages/AddedProducts";
import UserSignup from "./pages/UserSignup";
import UserLogin from "./pages/UserLogin";
import UserDashboard from "./pages/UserDashboard";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="adminlogin" element={<AdminLogin />} />
        <Route path="admindashboard" element={<AdminDashboard />} />
        <Route path="addedproducts" element={<AddedProducts />} />
        <Route path="usersignup" element={<UserSignup />} />
        <Route path="userlogin" element={<UserLogin />} />
        <Route path="userdashboard" element={<UserDashboard />} />
      </Routes>
    </>
  );
};

export default App;
