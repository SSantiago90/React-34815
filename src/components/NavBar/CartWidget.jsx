//1. importamos el hook de context: useContext
import React, { useContext } from "react";
//2. Importamos el context que queramos utilizar
import { cartContext } from "../../context/cartContext";
import IconSVG from "./IconSVG";

function CartWidget() {
  //3. Inicializamos el contexto deseado
  const miContext = useContext(cartContext);

  return (
    <>
      <IconSVG />
      <span style={{ color: "red" }}>{miContext.itemsInCart()}</span>
    </>
  );
}

export default CartWidget;
