import React from "react";
import CartWidget from "./CartWidget";
import "./navbar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="nav-menu">
      <ul className="nav-list">
        <li>
          <Link to="/">
            <h2>Mi tienda</h2>
          </Link>
        </li>
        <li>
          <Link to="/category/smartphones">Smartphones</Link>
        </li>
        <li>
          <Link to="/category/laptops">PC</Link>
        </li>
        <li>
          <Link to="/category/skincare">Skin Care</Link>
        </li>
        <li>
          <Link to="/buscar">Buscar</Link>
        </li>
        <li>
          <CartWidget />
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
