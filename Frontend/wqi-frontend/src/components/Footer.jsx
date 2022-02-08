import React from "react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div>
      <footer>
        <Link to="/">
          <h1>Jalrakshan</h1>
        </Link>
        <div className="footer-center">
          <p>&copy; D12A Group 22</p>
          {/* changed "to" to grievances later */}
          <p>Have any grievances? <Link to="/">Let us know.</Link></p>
        </div>
        <Link to="/about">
          <h4>About Us</h4>
        </Link>
      </footer>
    </div>
  );
}

export default Footer;
