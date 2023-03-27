import NavBar from "./components/NavBar/Navbar";
import Cart from "./components/Cart/Cart";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { Routes, Route } from "react-router-dom";
import React from "react";
import CartProvider from "./context/CartContext";
import ContactForm from "./components/ContactForm/ContactForm";




function App() {
  return (
    <>

      <CartProvider>
        <NavBar />
        <div className="container">
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/categoria/:categoriaId" element={<ItemListContainer />} />
            <Route path="/detalle/:detalleId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contactForm" element={<ContactForm />} />
          </Routes>
        </div>
      </CartProvider>
    </>
  );
}

export default App;
