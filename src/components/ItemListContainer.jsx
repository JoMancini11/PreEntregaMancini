import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import productos from "../data/productos";

const ItemListContainer = ({ greeting }) => {
  const { id: categoryId } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = new Promise((resolve) => {
      setTimeout(() => {
        if (categoryId) {
          resolve(productos.filter((item) => item.category === categoryId));
        } else {
          resolve(productos);
        }
      }, 1000);
    });

    fetchData.then((data) => setItems(data));
  }, [categoryId]);

  return (
    <div style={{ padding: "20px", textAlign: "center", backgroundColor: "#f5f5f5" }}>
      <h1 style={{ color: "rgb(88,43,170)", fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>
        {greeting}
      </h1>
      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "20px" }}>
        {items.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "15px",
              width: "200px",
              textAlign: "center",
              backgroundColor: "#fff",
              position: "relative",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={item.img || "https://via.placeholder.com/150"}
              alt={item.name}
              style={{
                width: "100%",
                borderRadius: "8px",
                marginBottom: "10px",
              }}
            />
            <h2 style={{ fontSize: "16px", fontWeight: "bold", margin: "10px 0" }}>{item.name}</h2>
            <p style={{ fontSize: "18px", fontWeight: "bold", margin: "5px 0" }}>
              Precio: ${item.price}
            </p>
            <p style={{ fontSize: "14px", color: "green", margin: "5px 0" }}>Envío Gratis</p>
            <Link
              to={`/item/${item.id}`}
              style={{
                display: "block",
                marginTop: "10px",
                textDecoration: "none",
                color: "white",
                backgroundColor: "rgb(132,84,204)",
                padding: "10px",
                borderRadius: "5px",
                fontSize: "14px",
              }}
            >
              Ver Detalle
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
