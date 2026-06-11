import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="adminlogin" element={<AdminLogin />} />
        <Route path="admindashboard" element={<AdminDashboard />} />
      </Routes>
    </>
  );
};

export default App;
