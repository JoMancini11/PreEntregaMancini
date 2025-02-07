import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { cart, totalItems, totalPrice, removeFromCart, updateQuantity } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false); // Estado para abrir/cerrar el menú

  return (
    <div style={{ position: "relative", cursor: "pointer" }}>
      {/* Ícono del carrito */}
      <span 
        style={{ fontSize: "24px", color: "rgb(132,84,204)" }} 
        onClick={() => setIsOpen(!isOpen)} // Abre/cierra el menú al hacer click
      >
        🛒
      </span>
      
      {totalItems > 0 && (
        <span
          style={{
            position: "absolute",
            top: "-5px",
            right: "-10px",
            backgroundColor: "rgb(88,43,170)",
            color: "white",
            borderRadius: "50%",
            padding: "5px",
            fontSize: "12px",
            minWidth: "20px",
            textAlign: "center",
          }}
        >
          {totalItems}
        </span>
      )}

      {/* ✅ Dropdown con los productos en el carrito */}
      {isOpen && (
        <div 
          style={{
            position: "absolute",
            right: 0,
            top: "30px",
            width: "300px",
            backgroundColor: "#fff",
            boxShadow: "0px 4px 8px rgba(0,0,0,0.2)",
            borderRadius: "8px",
            padding: "10px",
            zIndex: 1000
          }}
        >
          <h3 style={{ color: "#582baa", textAlign: "center" }}>🛒 Carrito</h3>
          
          {cart.length === 0 ? (
            <p style={{ textAlign: "center" }}>El carrito está vacío.</p>
          ) : (
            <ul style={{ listStyle: "none", padding: 0 }}>
              {cart.map((item) => (
                <li 
                  key={item.id} 
                  style={{
                    display: "flex",
                    alignItems: "center",
                    borderBottom: "1px solid #ddd",
                    padding: "8px 0"
                  }}
                >
                  {/* ✅ Imagen del producto */}
                  <img 
                    src={item.img} 
                    alt={item.name} 
                    style={{ width: "40px", height: "40px", borderRadius: "5px", objectFit: "cover", marginRight: "10px" }} 
                  />

                  {/* ✅ Nombre y cantidad */}
                  <div style={{ flex: "1", textAlign: "left" }}>
                    <p style={{ margin: 0 }}>{item.name}</p>
                    <p style={{ margin: 0 }}>x{item.quantity}</p>
                  </div>

                  {/* ✅ Botones para modificar cantidad */}
                  <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      style={{
                        backgroundColor: "red", color: "white", border: "none", padding: "5px", borderRadius: "5px",
                        cursor: "pointer"
                      }}
                    >➖</button>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      style={{
                        backgroundColor: "green", color: "white", border: "none", padding: "5px", borderRadius: "5px",
                        cursor: "pointer"
                      }}
                    >➕</button>
                  </div>

                  {/* ❌ Botón de eliminar */}
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    style={{
                      backgroundColor: "red", color: "white", border: "none", padding: "5px", borderRadius: "5px",
                      cursor: "pointer"
                    }}
                  >❌</button>
                </li>
              ))}
            </ul>
          )}

          <h4 style={{ textAlign: "center" }}>Total: ${totalPrice}</h4>
          
          <Link 
            to="/checkout" 
            style={{
              display: "block",
              textAlign: "center",
              textDecoration: "none",
              background: "rgb(132,84,204)",
              color: "white",
              padding: "10px",
              borderRadius: "5px",
              marginTop: "10px"
            }}
          >
            Finalizar Compra
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartWidget;
