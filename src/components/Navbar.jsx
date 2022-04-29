import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = (prevState) => {
     setClick(!prevState);
  };
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            TRVL <i className="fab fa-typo3"></i>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
