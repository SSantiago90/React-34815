import React from "react";
import MyButton from "../MyButton/MyButton";
import ToggleButton from "../ToggleButton/ToggleButton";
import "./item.css";
import { Link } from "react-router-dom";

function Item({ title, imgurl, price, color, id }) {
  const urlDetail = `/detail/${id}`;
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

      <Link to={urlDetail}>
        <MyButton color={color}>Ver más</MyButton>
      </Link>
    </div>
  );
}

export default Item;
