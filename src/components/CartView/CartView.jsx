import React, { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import { createOrder, exportArrayToFirestore } from "../../Services/firestore";
import { useNavigate } from "react-router-dom";

import MyButton from "../MyButton/MyButton";
import "./cartview.css";

function CartView() {
  const { cart, removeItem, clear, priceInCart } = useContext(cartContext);
  let navigate = useNavigate();

  if (cart.length === 0)
    return (
      <div className="cart-container">
        <h1>Carrito Vacío</h1>
      </div>
    );

  async function handleCheckout(evt) {
    // Crear nuestro objeto "orden de compra"
    const order = {
      buyer: {
        name: "Santiago",
        email: "salkinsantiago@a.com",
        phone: "123123",
      },
      items: cart,
      total: 0,
      date: new Date(),
    };

    const orderId = await createOrder(order);
    navigate(`/thankyou/${orderId}`);
    /* ${orderId} */
    //1. Hacer un rendering condicional -> guardamos el id en un State
    //2. Sweet Alert/Notificación -> mostrando el id
    //3. Redirigir al usuario a /thankyou
    //3-b Redirigir al usuario a /thankyou/:orderid (persistencia)
  }

  return (
    <div className="cart-container">
      <div className="cart-itemsList">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.imgurl} alt={item.title} />
            <h2>{item.title}</h2>
            <h4>${item.price}</h4>
            <h4>unidades: {item.count}</h4>
            <MyButton onTouchButton={() => removeItem(item.id)} colorBtn="red">
              X
            </MyButton>
          </div>
        ))}
      </div>
      <MyButton colorBtn="green" onTouchButton={handleCheckout}>
        Finalizar Compra
      </MyButton>
      <MyButton>Vaciar carrito</MyButton>
    </div>
  );
}

export default CartView;
