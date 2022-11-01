import React from "react";
import CartWidget from "./CartWidget";
import "./navbar.css";

function NavBar() {
  return (
    <nav className="nav-menu">
      <ul className="nav-list">
        <li>
          <a href="/">
            <h2>Mi tienda</h2>
          </a>
        </li>
        <li>
          <a href="/">Categoría A</a>
        </li>
        <li>
          <a href="/">Categoría B</a>
        </li>
        <li>
          <CartWidget />
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
