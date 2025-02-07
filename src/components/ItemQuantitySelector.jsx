import React from "react";

const ItemQuantitySelector = ({ quantity, setQuantity }) => {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <button
        onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
        style={{
          background: "red",
          color: "white",
          padding: "5px",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        ➖
      </button>
      <span>{quantity}</span>
      <button
        onClick={() => setQuantity(quantity + 1)}
        style={{
          background: "green",
          color: "white",
          padding: "5px",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        ➕
      </button>
    </div>
  );
};

export default ItemQuantitySelector;
