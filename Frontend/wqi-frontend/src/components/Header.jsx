import React from "react";

function Header() {
  return (
    <header>
      <nav className="navbar">
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
  );
}

export default Header;
