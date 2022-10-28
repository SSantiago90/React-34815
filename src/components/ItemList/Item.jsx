import React from "react";
import MyButton from "../MyButton/MyButton";
import "./item.css";

function Item({ title, imgurl, price, color }) {
  return (
    <div className="card">
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
