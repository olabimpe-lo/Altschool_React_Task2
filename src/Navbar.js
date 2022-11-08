import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const path = window.location.pathname;
const Navbar = () => {
  return (
    <div>
      <nav className="nav">
        <Link to="/" className="company-site">
          BIMARI
        </Link>
        <ul>
          <li className="nav_features">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/clientdata">ClientRecord</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/does-not-exist">Error Page</Link>
          </li>
          <li>
            <Link to="/error-message">Error Boundary</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Navbar;
