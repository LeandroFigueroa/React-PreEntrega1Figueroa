import NavBar from "./components/NavBar/Navbar";
import Nosotros from "./components/Nosotros/Nosotros";
import Carrito from "./components/Carrito/Carrito";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />

      <div className="container">
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/categoria/:categoriaId" element={<ItemListContainer />} />
          <Route path="/detalle/:detalleId" element={<ItemDetailContainer />} />
          <Route path="/carrito" element={<Carrito />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
