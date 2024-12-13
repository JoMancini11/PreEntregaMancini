import React from "react";

const CartWidget = ({ contador }) => {
  return (
    <div style={{ display: "flex", alignItems: "center", cursor: "pointer", position: "relative" }}>
      <span style={{ fontSize: "18px", color: "rgb(132,84,204)" }}>🛒</span>
      <span style={{
        position: "absolute",
        top: "-5px",
        right: "-10px",
        backgroundColor: "rgb(88,43,170)",
        color: "white",
        borderRadius: "50%",
        fontSize: "12px",
        padding: "2px 6px"
      }}>{contador}</span>
    </div>
  );
};

export default CartWidget;
