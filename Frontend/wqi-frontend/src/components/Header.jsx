import React from "react";

import { Navbar, Nav } from "react-bootstrap";

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
      <Navbar.Brand href="/">Rivers be dyin</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggle" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Item>
            <Nav.Link href="/">VISUALISATION</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="">PREVENTION</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="">DATASET</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="">ABOUT US</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
