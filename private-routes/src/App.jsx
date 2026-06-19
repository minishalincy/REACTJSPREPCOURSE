import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Profilepage from "./pages/Profilepage";
import PrivateRoute from "./private/PrivateRoute";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Homepage />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profilepage />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
};

export default App;
