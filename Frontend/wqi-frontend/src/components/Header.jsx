import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
function Header() {
  return (
    <header>
      <nav className="normie-navbar">
        <span>Rivers be dyin</span> {/* will become image*/}
        <ul className="header-links">
          <a href="/">
            <li>HOME</li>
          </a>
          <a href="/">
            <li>VISUALISATION</li>
          </a>
          <a href="/">
            <li>PREVENTION</li>
          </a>
          <a href="/">
            <li>DATASET</li>
          </a>
          <a href="/">
            <li>ABOUT US</li>
          </a>
        </ul>
      </nav>
    </header>
    // <div>
    //   <Navbar dark color="dark" expand="md">
    //     <NavbarBrand>Rivers be dyin</NavbarBrand>
    //     <NavbarToggler onClick={function noRefCheck() {}} />
    //     <Collapse navbar>
    //       <Nav className="me-auto" navbar>
    //         <NavItem>
    //           <NavLink href="/">VISUALISATION</NavLink>
    //         </NavItem>
    //         <NavItem>
    //           <NavLink href="">PREVENTION</NavLink>
    //         </NavItem>
    //         <NavItem>
    //           <NavLink href="">DATASET</NavLink>
    //         </NavItem>
    //         <NavItem>
    //           <NavLink href="">ABOUT US</NavLink>
    //         </NavItem>
    //       </Nav>
    //     </Collapse>
    //   </Navbar>
    // </div>
  );
}

export default Header;
