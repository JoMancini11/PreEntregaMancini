import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Checkout from "./components/Checkout"; // ✅ Importa el Checkout

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer greeting="¡Bienvenido a Vallstore!" />}
          />
          <Route
            path="/category/:id"
            element={<ItemListContainer greeting="Filtrando por categoría..." />}
          />
          <Route
            path="/item/:id"
            element={<ItemDetailContainer />}
          />
          <Route
            path="/checkout"
            element={<Checkout />} // ✅ Agrega la ruta para Checkout
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
