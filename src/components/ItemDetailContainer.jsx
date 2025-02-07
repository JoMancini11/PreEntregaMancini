import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import productos from "../data/productos";
import ItemQuantitySelector from "./ItemQuantitySelector";

const ItemDetailContainer = () => {
  const { id: itemId } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

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
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <h2>{product.name}</h2>
          <img 
            src={product.img} 
            alt={product.name} 
            style={{ width: "300px", borderRadius: "10px", margin: "10px 0" }} 
          />
          <p style={{ fontSize: "18px", fontWeight: "bold", color: "#582baa" }}>Precio: ${product.price}</p>
          <p>{product.description}</p>
          <ItemQuantitySelector quantity={quantity} setQuantity={setQuantity} />
          <button 
            onClick={() => addToCart(product, quantity)}
            style={{
              backgroundColor: "rgb(132,84,204)",
              color: "white",
              padding: "10px",
              borderRadius: "5px",
              fontSize: "16px",
              cursor: "pointer",
              marginTop: "10px",
              border: "none"
            }}
          >
            Añadir al Carrito
          </button>
        </div>
      ) : (
        <p>Cargando detalles del producto...</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;
