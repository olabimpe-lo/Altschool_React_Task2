import React from "react";
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (

    <div className="errorPage">
      <img
        src={require("./images/Error_404.jpg")}
        alt="Page not found"
      />

      <NavLink to="/">Go to Home</NavLink>

    </div>

  )
}

export default ErrorPage;