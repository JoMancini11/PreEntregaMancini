import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { CartProvider } from "./context/CartContext"; // ✅ Importa CartProvider

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider> {/* ✅ Envuelve toda la app con el provider */}
      <App />
    </CartProvider>
  </React.StrictMode>
);
