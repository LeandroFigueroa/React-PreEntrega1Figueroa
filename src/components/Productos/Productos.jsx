/* import ItemList from "../ItemList/ItemList";
import ItemListContainer from "../ItemListContainer/ItemListContainer";

export default function Productos() {
return(
  <ItemListContainer/>
)
 } */

import React from "react";
import IMG from "../Mocks/images/img01.jpg";
import "./productos.css";

export const Productos = () => {
  return (
    <>
      <h1 className="title"> PRODUCTOS</h1>
      <div className="productos">
        <div className="producto">
          <a href="#">
            <div className="producto__img">
              <img src={IMG} alt="" />
            </div>
          </a>
          <div className="producto__footer">
            <h1>Title</h1>
            <p>Categoria</p>
            <div className="price">$40000</div>
          </div>
          <div className="buttom">
            <button className="btn">Añadir al carrito</button>

            <div>
              <a href="#" className="btn">
                Vista
              </a>
            </div>
          </div>
        </div>
        <div className="producto">
          <a href="#">
            <div className="producto__img">
              <img src={IMG} alt="" />
            </div>
          </a>
          <div className="producto__footer">
            <h1>Title</h1>
            <p>Categoria</p>
            <div className="price">$40000</div>
          </div>
          <div className="buttom">
            <button className="btn">Añadir al carrito</button>

            <div>
              <a href="#" className="btn">
                Vista
              </a>
            </div>
          </div>
        </div>
        <div className="producto">
          <a href="#">
            <div className="producto__img">
              <img src={IMG} alt="" />
            </div>
          </a>
          <div className="producto__footer">
            <h1>Title</h1>
            <p>Categoria</p>
            <div className="price">$40000</div>
          </div>
          <div className="buttom">
            <button className="btn">Añadir al carrito</button>

            <div>
              <a href="#" className="btn">
                Vista
              </a>
            </div>
          </div>
        </div>
        <div className="producto">
          <a href="#">
            <div className="producto__img">
              <img src={IMG} alt="" />
            </div>
          </a>
          <div className="producto__footer">
            <h1>Title</h1>
            <p>Categoria</p>
            <div className="price">$40000</div>
          </div>
          <div className="buttom">
            <button className="btn">Añadir al carrito</button>
      
          <div>
            <a href="#" className="btn">
              Vista
            </a>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Productos;
