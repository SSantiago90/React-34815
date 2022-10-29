import React from "react";
import MyButton from "../MyButton/MyButton";
import ToggleButton from "../ToggleButton/ToggleButton";
import "./item.css";

function ComponenteCualquiera() {
  return <h1 style={{ color: "green" }}>Hola Mundo</h1>;
}

function Item({ title, imgurl, price, color }) {
  return (
    <div className="card">
      <ToggleButton icon="♥" />
      <div className="card-img">
        <img src={imgurl} alt={title} />
      </div>
      <div className="card-detail">
        <h3>{title}</h3>
        <p>${price}</p>
      </div>

      <MyButton color={color}>Ver más</MyButton>
    </div>
  );
}

export default Item;
export { ComponenteCualquiera };
