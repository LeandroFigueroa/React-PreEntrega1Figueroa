import React from "react";
import './itemCart.css';
import { useCartContext } from "../../context/CartContext";


const ItemCart = ({ items }) => {
    const { removeProduct } = useCartContext();

    return (
        <div className="itemCart">
            <img src={items.imageId} alt={items.title} />
            <div>
                <p>{items.title} </p>
                <p>Cantidad: {items.quantity}</p>
                <p>Precio: ${items.price}</p>
                <p>Subtotal: ${items.quantity * items.price}</p>
                <button onClick={() => removeProduct(items.id)}>Eliminar</button>
            </div>
        </div>
    )

}

export default ItemCart