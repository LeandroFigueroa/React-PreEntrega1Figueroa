import "./item.css";
import React from "react";
import { Link } from "react-router-dom";

const Item = ({ info }) => {
  return (


  
    <div className="productos">
      <Link to={`/detalle/${info.id}`} className="prodVenta">
        <img src={info.image} alt="" />
        <h2 className="titleProd">{info.title}</h2>
        <p>{info.price}</p>
        <div className="buttom">
          <button className="btn">Añadir al carrito</button>
        </div>
      </Link>
    </div>

  );
};

export default Item;
