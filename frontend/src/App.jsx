import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import Error from "./pages/Error";
const App = function () {
  //funtional expression
  return (
    <>
      <Navbar />
      <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/signup" element={<Signup/>}/>
       <Route path="/login" element={<Login/>}/>
       <Route path="/products" element={<Products/>}/>
       <Route path="/error" element={<Error/>}/>
      </Routes>
      <Footer/>

      {/* <Products/> */}
    </>
  );
};

export default App;
