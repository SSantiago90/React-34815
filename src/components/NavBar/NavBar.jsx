import React from "react";
import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <nav>
      <ul>
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
