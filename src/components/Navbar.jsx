import React from "react";
import "./styles/navbar.css";
import CartWidget from "./CartWidget";

const NavBar = (props) => {
  return (
    <header>
      <nav className="nav">
        <a href="/" className="site-title">
          MercadoVago
        </a>
        <ul>
          <li className="active">
            <a href="/productos"> Productos</a>
          </li>
          <li>
            <a href="/nosotros"> Nosotros </a>
          </li>
          <li>
            <a href="/carrito">
              {" "}
              <CartWidget />{" "}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
