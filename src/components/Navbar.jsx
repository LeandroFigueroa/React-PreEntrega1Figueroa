import React from "react";
import "./navbar.css";


const NavBar = (props) => {
  return (
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
            
          <a href="/carrito"> Carrito de compras </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
