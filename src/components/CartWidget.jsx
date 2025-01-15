import React from "react";

const CartWidget = ({ contador }) => {
  return (
    <div style={{ display: "flex", alignItems: "center", position: "relative", cursor: "pointer" }}>
      <span style={{ fontSize: "24px", color: "rgb(132,84,204)" }}>🛒</span>
      {contador > 0 && (
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
          {contador}
        </span>
      )}
    </div>
  );
};

export default CartWidget;
