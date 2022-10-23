import React from "react";
import "./Navbar.css";

function Navbar({ showNav }) {
  return (
    <>
      {showNav && (
        <div className="navbar-container">
          <div className="logo">
            <h2>
              Crescent <span>|</span>
              <span>Asset Management</span>
            </h2>
          </div>
          <ul>
            <li>About</li>
            <li>Contact</li>
            <li>Service</li>
            <li>Team</li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;
