import React from "react";

import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar variant="dark" expand="md">
      <Link to="/">
        <Navbar.Brand>Jalrakshan</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggle" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Link to="/vis">
            <Nav.Item>
              <span>VISUALISATION</span>
            </Nav.Item>
          </Link>
          <Link to="/prevention">
            <Nav.Item>
              <span>PREVENTION</span>
            </Nav.Item>
          </Link>
          <Link to="/dataset">
            <Nav.Item>
              <span>DATASET</span>
            </Nav.Item>
          </Link>
          <Link to="/about">
            <Nav.Item>
              <span>ABOUT US</span>
            </Nav.Item>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
