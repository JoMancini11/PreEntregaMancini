import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Checkout = () => {
  const { cart, totalPrice, removeFromCart, clearCart } = useContext(CartContext);

  const handleCheckout = () => {
    alert("¡Gracias por tu compra! 🎉 Tu pedido ha sido confirmado.");
    clearCart(); // Vacía el carrito después de confirmar la compra
  };

  return (
    <div style={{ padding: "20px", textAlign: "center", backgroundColor: "#f5f5f5" }}>
      <h1 style={{ color: "rgb(88,43,170)" }}>🛍️ Resumen de tu compra</h1>

      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div
              key={item.id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "10px",
                margin: "10px",
                backgroundColor: "#fff",
              }}
            >
              <h2>{item.name}</h2>
              <p>Cantidad: {item.quantity}</p>
              <p>Precio: ${item.price}</p>
              <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
            </div>
          ))}
          <h2>Total: ${totalPrice}</h2>
          <button onClick={clearCart} style={{ backgroundColor: "red", color: "white", padding: "10px", borderRadius: "5px" }}>
            Vaciar carrito
          </button>
          <br />
          {/* ✅ Botón actualizado para confirmar la compra */}
          <button 
            onClick={handleCheckout} 
            style={{ backgroundColor: "green", color: "white", padding: "10px", borderRadius: "5px", marginTop: "10px" }}
          >
            Confirmar compra
          </button>
        </div>
      )}
      <br />
      <Link to="/">⬅ Volver a la tienda</Link>
    </div>
  );
};

export default Checkout;
