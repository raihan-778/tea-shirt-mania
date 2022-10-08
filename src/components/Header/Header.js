import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <nav className="header">
      <h2>This is header part</h2>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/order">Order</Link>
      <Link to="/grandpa">Grandpa</Link>
    </nav>
  );
};

export default Header;
