import "./mybutton.css";
import React, { useState } from "react";

function MyButton(props) {
  let [colorBtn, setColorBtn] = useState(props.colorBtn);

  return (
    <button
      disabled={props.disabled}
      onClick={props.onTouchButton}
      style={{ backgroundColor: colorBtn, marginBotton: "10px" }}
      className="btn"
    >
      {props.children}
    </button>
  );
}

export default MyButton;
