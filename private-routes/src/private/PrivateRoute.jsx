import React from "react";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

const PrivateRoute = (props) => {
  let loggedIn = localStorage.getItem("loggedIn"); //collecting data from localstorage

  if (loggedIn === "true") {
    return props.children;
  } else {
    toast.warn("Please Login")
    return <Navigate to={"/"} />;
  }
};

export default PrivateRoute;
