import React from "react";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import ItemCart from "../ItemCart/ItemCart";
import "./cart.css";



const Cart = () => {

  const { cart, totalPrice } = useCartContext();

  if (cart.length === 0) {
    return (
      <>


        <p className="pTitle" > El carrito esta vacío </p>
        <div className="cartPrincipal">
          <Link className="linkCompras" to='/'> Ir de compras </Link>

        </div>

      </>
    );
  }
  return (
    <>
      <div>
        <p> Items seleccionado</p>
      </div>
      {
        cart.map(items => <ItemCart key={items.id} items={items} />)
      }
      <p className="totalPrice">
        Total: $ {totalPrice()}
      </p>

      <div className="pagarProd">
        <Link className='pagarProd' to='/contactForm'> Pagar</Link>
      </div>

      <div className="pagarProd">
        <Link className='pagarProd' to='/'> Volver a inicio </Link>
      </div>

    </>
  );

}

export default Cart