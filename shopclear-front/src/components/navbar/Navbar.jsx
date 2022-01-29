import React from "react";
import logo from "../../shopclear.svg";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="shop__navbar">
      <div className="shop__navbar-links">
        <div ClassName="shop__navbar-logo">
        <img src={logo} alt="logo" />
        </div>
        <div ClassName="shop__navbar-links_container">
           <p><a href="#home">Home</a></p>
           <p><a href="#services"></a>Services</p>
           <p><a href="#cases">Cases</a></p>
           <p><a href="#about">About</a></p>
           <p><a href="#article">Article</a></p>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
