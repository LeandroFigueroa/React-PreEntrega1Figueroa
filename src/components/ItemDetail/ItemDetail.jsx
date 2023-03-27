import React, {useState} from "react";
import "./itemDetail.css";
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { useCartContext } from "../../context/CartContext";




export const ItemDetail = ({ data }) => {
  const [goToCart, setGoToCart] = useState(false);
  const {addProduct} = useCartContext();



  const onAdd = (quantity)=> {
    setGoToCart(true);
    addProduct(data, quantity);


  }


  return (
      <div className="container">
        <div className="detail">
          <img className="detail__image" src={data.imageId} alt="" />
          <div className="content">
            <h1>{data.title}</h1>
            <h2>{data.marca}</h2>
            <br />
            <h2>${data.price}</h2>
            <br />
            <h4>Description: <br />{data.description}</h4>

          
          </div>
                     
          <br />
            {
              goToCart
              
                ?  <Link className="linkCompras" to= "/cart"> Finalizar compra</Link>
                  
                 
                : <ItemCount initial={1} stock={100} onAdd ={onAdd}></ItemCount>
                
                
            }
  
         
          <Link className="linkCompras" to="/"> inicio</Link>
          

        </div>
      </div>
  );
};

export default ItemDetail;
