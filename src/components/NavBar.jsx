import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav style={{ display: "flex", justifyContent: "space-between", padding: "10px", backgroundColor: "#f9f5fa" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Link to="/" style={{ textDecoration: "none", color: "#582baa", fontSize: "30px", fontWeight: "bold", marginRight: "20px" }}>
          𝕍𝕒𝕝𝕝𝕤𝕥𝕠𝕣𝕖
        </Link>
        <Link to="/" style={{ margin: "0 15px", textDecoration: "none", color: "#582baa", fontWeight: "bold" }}>
          Inicio
        </Link>
        <Link to="/category/ropa-de-bano" style={{ margin: "0 15px", textDecoration: "none", color: "#582baa", fontWeight: "bold" }}>
          Ropa de Baño
        </Link>
        <Link to="/category/piscinas" style={{ margin: "0 15px", textDecoration: "none", color: "#582baa", fontWeight: "bold" }}>
          Piscinas
        </Link>
        <Link to="/category/accesorios" style={{ margin: "0 15px", textDecoration: "none", color: "#582baa", fontWeight: "bold" }}>
          Accesorios
        </Link>
      </div>
      {/* ✅ Se eliminó la prop "contador={0}" porque CartWidget ahora usa CartContext */}
      <CartWidget />
    </nav>
  );
};

export default NavBar;
