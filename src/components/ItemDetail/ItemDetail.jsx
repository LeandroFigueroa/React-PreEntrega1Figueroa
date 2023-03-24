import React from "react";
import "./itemDetail.css";

export const ItemDetail = ({ data }) => {
  return (
    <div className="container">
      <div className="detail">
        <img className="detail__image" src={data.imageId} alt="" />
        <div className="content">
          <h1>{data.title}</h1>
          <h2>{data.marca}</h2>
          <h2>{data.price}</h2>
          <h4>{data.description}</h4>
          <div className="buttom">
          <button className="btn">Añadir al carrito</button>
        </div>
        </div>
        
        

      </div>
    </div>
  );
};

export default ItemDetail;
