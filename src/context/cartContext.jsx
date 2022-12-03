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
      product.count = count;
      cart.push(product);
      setCart(cart);
    }
  }

  function itemsInCart() {
    let total = 0;
    cart.forEach((itemInCart) => (total = total + itemInCart.count));
    return total;
  }

  function priceInCart() {
    let totalPrice = 0;
    cart.forEach(
      (producto) =>
        (totalPrice = totalPrice + producto.price * producto.cantidad)
    );
    return totalPrice;
  }

  function clear() {
    setCart([]);
  }

  function removeItem(idRemove) {
    console.log("Eliminando el item:", idRemove);
    const newCart = [...cart];
    newCart.pop();
    setCart(newCart);
    /* cart.filter -> Filtrar todos los items con un ID diferente a "idRemove"   */
  }

  function alreadyInCart(id) {
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
      value={{
        clear,
        cart,
        addToCart,
        saludoContext,
        itemsInCart,
        removeItem,
        priceInCart,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}
