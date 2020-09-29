import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div
      style={{
        height: "5vh",
        background: "antiquewhite",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Link style={{ marginRight: "10px" }} to="/">
        Flash Cards
      </Link>
      <Link to="/manage">Manage cards</Link>
    </div>
  );
};
export default Header;
