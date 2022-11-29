import React from "react";
import { useParams } from "react-router-dom";

function ThankYou() {
  const idOrder = useParams().idOrder;

  return (
    <div style={{ color: "white" }}>
      <h1>Gracias por tu compra</h1>
      <h3>
        El id de tu compra es: <strong>{idOrder}</strong>
      </h3>
    </div>
  );
}

export default ThankYou;
