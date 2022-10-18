import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <span className="heading-gradient heading1">GNU/Linux User's Club</span>
        <span className="heading-gradient heading2">IIIT Bhopal</span>
      </div>
      <div className="menu">
        <span className="menu-item">Home </span>
        <span className="menu-item">Events </span>
        <span className="menu-item">Blog </span>
        <span className="menu-item">Team </span>
        <span className="menu-item">Contact </span>
      </div>
    </div>
  );
};

export default Header;
