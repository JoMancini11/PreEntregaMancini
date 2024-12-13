import React from "react";
import CartWidget from "./CartWidget";

const NavBar = ({ contador }) => {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px 20px",
      backgroundColor: "rgb(249,245,250)",
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
    }}>
      <div style={{ display: "flex", gap: "20px", alignItems: "center", flex: "1" }}>
        <a href="/index.html" style={{ textDecoration: "none", color: "rgb(132,84,204)", fontWeight: "bold", fontSize: "16px" }}>Inicio</a>
        <a href="#" style={{ textDecoration: "none", color: "rgb(132,84,204)", fontWeight: "bold", fontSize: "16px" }}>Categorías</a>
        <a href="#" style={{ textDecoration: "none", color: "rgb(132,84,204)", fontWeight: "bold", fontSize: "16px" }}>Our Universe</a>
        <a href="#" style={{ textDecoration: "none", color: "rgb(132,84,204)", fontWeight: "bold", fontSize: "16px" }}>Contacto</a>
      </div>
      <div style={{
        flex: "1",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <a href="/index.html" style={{ textDecoration: "none" }}>
          <div style={{
            fontSize: "28px",
            fontWeight: "bold",
            fontFamily: "'Cursive', sans-serif",
            color: "rgb(88,43,170)"
          }}>
            𝕍𝕒𝕝𝕝𝕤𝕥𝕠𝕣𝕖
          </div>
        </a>
      </div>
      <div style={{ display: "flex", gap: "15px", alignItems: "center", flex: "1", justifyContent: "flex-end" }}>
        <span style={{ fontSize: "18px", cursor: "pointer", color: "rgb(132,84,204)" }}>🔍</span>
        <span style={{ fontSize: "18px", cursor: "pointer", color: "rgb(132,84,204)" }}>❤️</span>
        <span style={{ fontSize: "18px", cursor: "pointer", color: "rgb(132,84,204)" }}>👤</span>
        <CartWidget contador={contador} />
      </div>
    </nav>
  );
};

export default NavBar;
