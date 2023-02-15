import { Component } from "react";
import NavBar from "./components/Navbar";
import Inicio from "./pages/Inicio";
import Productos from "./pages/Productos";
import Nosotros from "./pages/Nosotros";
import Carrito from "./pages/Carrito";


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
      {component}
    </>
  

  );
}

export default App;
