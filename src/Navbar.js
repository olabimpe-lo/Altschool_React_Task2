import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
//"link" substitutes for the a in the <a href> tag
//useMatch helps to covert the current path t the path we are going
import pagination from "./components/Pagination";

const path = window.location.pathname;
const Navbar = () => {
  return (
    <nav className="nav">
      <Link to="/" className="company-site">
        BIMARI
      </Link>
      <ul>
        <li className="nav_features">
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/employee">Employee Record</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};
//custom link that wraps the link
function CustomLink({ to, children, ...props }) {
  //makes the path you set out to be the full part tho you set out relative
  const resolvedPath = useResolvedPath(to);
  //(end: true) means the entire path must match
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  if (path === to)
    return (
      <li className={path === to ? "nav_features" : ""}>
        <Link to={to}>{children}</Link>
      </li>
    );
}
export default Navbar;
