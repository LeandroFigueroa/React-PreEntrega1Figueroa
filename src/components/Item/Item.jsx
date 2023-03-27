import "./item.css";
import React from "react";
import { Link } from "react-router-dom";




const Item = ({ info }) => {
  


  return (
    <div className="productos">
      <Link to={`/detalle/${info.id}`} className="prodVenta">
        <img src={info.imageId} alt="" />
        <h2 className="titleProd">{info.title}</h2>
        <p>Precio:${info.price}</p>
        <p>Marca:{info.marca} </p>
        <p>Stock:{info.stock}</p>
        <div className="buttom">
          <button className="btn">Ver producto</button>
        </div>
      </Link>
    </div>

  );
};

export default Item;
