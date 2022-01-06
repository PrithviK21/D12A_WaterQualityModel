import React from "react";

import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    // <header>
    //   <nav className="normie-navbar">
    //     <span>Rivers be dyin</span> {/* will become image*/}
    //     <ul className="header-links">
    //       <a href="/">
    //         <li>HOME</li>
    //       </a>
    //       <a href="/">
    //         <li>VISUALISATION</li>
    //       </a>
    //       <a href="/">
    //         <li>PREVENTION</li>
    //       </a>
    //       <a href="/">
    //         <li>DATASET</li>
    //       </a>
    //       <a href="/">
    //         <li>ABOUT US</li>
    //       </a>s
    //     </ul>
    //   </nav>
    // </header>

    <Navbar variant="dark" expand="md">
      <Link to="/">
        <Navbar.Brand href="">Rivers be dyin</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggle" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Item>
            <Link to="/vis">
              <Nav.Link href="/">VISUALISATION</Nav.Link>
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/prevention">
              <Nav.Link href="/">PREVENTION</Nav.Link>
            </Link>
          </Nav.Item>
          <Link to="/dataset">
            <Nav.Item>
              <Nav.Link href="/">DATASET</Nav.Link>
            </Nav.Item>
          </Link>
          <Link to="/about">
            <Nav.Item>
              <Nav.Link href="/">ABOUT US</Nav.Link>
            </Nav.Item>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
