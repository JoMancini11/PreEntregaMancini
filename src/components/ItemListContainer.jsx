import React, { useState } from "react";

const ItemListContainer = ({ greeting, setContador, contador }) => {
  const agregarAlCarrito = () => {
    setContador(contador + 1);
  };

  const quitarDelCarrito = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  return (
    <div style={{ padding: "20px", textAlign: "center", backgroundColor: "rgb(228,203,251)" }}>
      <h1 style={{ color: "rgb(88,43,170)", fontSize: "24px", fontWeight: "bold" }}>{greeting}</h1>
      <div style={{ marginTop: "20px" }}>
        <button
          onClick={agregarAlCarrito}
          style={{
            padding: "10px 20px",
            margin: "10px",
            fontSize: "16px",
            backgroundColor: "rgb(132,84,204)",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Agregar al carrito
        </button>
        <button
          onClick={quitarDelCarrito}
          style={{
            padding: "10px 20px",
            margin: "10px",
            fontSize: "16px",
            backgroundColor: "rgb(88,43,170)",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Quitar del carrito
        </button>
      </div>
      <p style={{ color: "rgb(88,43,170)", fontSize: "18px", fontWeight: "bold", marginTop: "10px" }}>
        Productos en el carrito: {contador}
      </p>
    </div>
  );
};

export default ItemListContainer;
