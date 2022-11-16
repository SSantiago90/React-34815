import { createContext, useState } from "react";

// 1. Importamos e inicializamos el contexto con createContext()
export const cartContext = createContext();

// 2. Creamos nuestro Context Provider
export function CartContextProvider({ children }) {
  const saludoContext = "Hola Context!";

  const [cart, setCart] = useState([]);

  function addToCart(product, count) {

    let itemAlreadyInCart = cart.findIndex(
      (itemInCart) => itemInCart.id === product.id
    );

    let newCart = [...cart];

    if (itemAlreadyInCart !== -1) {
      newCart[itemAlreadyInCart].count += count;
      setCart(newCart);
    } else {
      /* let newCart = cart.map( item => item); */

      //1) agregando una propiedad
      product.count = count;
      newCart.push(product);

      //2) usando spread
      /* newCart.push( ...product,count) */

      setCart(newCart);
    }
  }

  function itemsInCart() {
    let total = 0;
    cart.forEach((itemInCart) => (total = total + itemInCart.count));
    return total;
  }

  function clear() {
    /* vaciar el estado */
  }

  function removeItem(idRevove) {
    /* cart.filter -> Filtrar todos los items con un ID diferente a "idRemove"   */
  }

  function priceInCart() {
    /* calcular el costo total de la compra */
  }

  function alreadyInCart(id){
    /* return true/false */
  }

  /*  const value = {
    saludoContext,
    itemsInCart,
    cart,
  }; */

  //3. retornamos el Provider del context creado
  //4. Pasamos en la prop "value" las variables que queramos hacer visibles
  return (
    <cartContext.Provider
      value={{ cart, addToCart, saludoContext, itemsInCart }}
    >
      {children}
    </cartContext.Provider>
  );
}
