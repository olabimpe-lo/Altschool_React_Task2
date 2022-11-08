import React from "react";
import { Link } from "react-router-dom";
// import "./index.css";

const path = window.location.pathname;
const Navbar = () => {
  return (
    <div>
      <nav className="nav">
        {/* <Link to="/" className="company-site">
          BIMARI
        </Link> */}
        <ul>
          <li className="nav_features">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/clientdata">Client Record</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Navbar;
