import React from "react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div>
      <footer>
        <Link to="/">
          <h1>LOGO</h1>
        </Link>
        <p>&copy; D12A Group 22</p>
        <Link to="/about">
          <h3>About Us</h3>
        </Link>
      </footer>
    </div>
  );
}

export default Footer;
