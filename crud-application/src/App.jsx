import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AddStudent from "./pages/AddStudent";
import ViewStudent from "./pages/ViewStudent";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="addstudent" element={<AddStudent />} />
        <Route path="viewstudent" element={<ViewStudent />} />
      </Routes>
    </>
  );
};

export default App;
