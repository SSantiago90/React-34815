import React from "react";
import CartWidget from "./CartWidget";
import "./navbar.css";
import ToggleButton from "../ToggleButton/ToggleButton";
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
        <ToggleButton icon="😀" />
        <ToggleButton icon="🛒" />
      </ul>
    </nav>
  );
}

export default NavBar;
