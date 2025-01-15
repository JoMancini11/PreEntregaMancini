import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import productos from "../data/productos";

const ItemDetailContainer = () => {
  const { id: itemId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos.find((item) => item.id === parseInt(itemId)));
      }, 1000);
    });

    fetchProduct.then((data) => setProduct(data));
  }, [itemId]);

  return (
    <div style={{ padding: "20px", textAlign: "center", backgroundColor: "#f5f5f5" }}>
      {product ? (
        <div style={{ border: "1px solid #ddd", borderRadius: "8px", padding: "20px", maxWidth: "400px", margin: "0 auto", backgroundColor: "#fff" }}>
          <img
            src={product.img || "https://via.placeholder.com/300"}
            alt={product.name}
            style={{ width: "100%", borderRadius: "8px", marginBottom: "20px" }}
          />
          <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "10px", color: "rgb(88,43,170)" }}>{product.name}</h2>
          <p style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "10px", color: "rgb(132,84,204)" }}>Precio: ${product.price}</p>
          <p style={{ fontSize: "16px", color: "gray", marginBottom: "10px" }}>{product.description}</p>
          <p style={{ fontSize: "14px", color: "green", marginBottom: "10px" }}>Envío Gratis</p>
        </div>
      ) : (
        <p>Cargando detalles del producto...</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;
