import { Component } from "react";
import NavBar from "./components/Navbar";
import Inicio from "./components/Inicio";
import Productos from "./components/Productos";
import Nosotros from "./components/Nosotros";
import Carrito from "./components/Carrito";


function App() {
  let component;
  switch (window.location.pathname) {
    case "/":
      component = <Inicio />;
      break;
    case "/nosotros":
      component = <Nosotros />;
      break;
    case "/productos":
      component = <Productos />;
      break;
    case "/carrito":
      component = <Carrito />;
      
      break;
  }
  return (
    <>
     
      <NavBar />
      <div className="container">{component}</div>
      
    </>
  

  );
}

export default App;
