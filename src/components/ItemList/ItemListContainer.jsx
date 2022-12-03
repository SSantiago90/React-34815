import { useState, useEffect } from "react";
import "./itemlist.css";
import getItems, { getItemsByCategory } from "../../Services/firestore";

import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import Loader from "../Loaders/Loader";

function ItemListContainer() {
  const [products, setProducts] = useState(null);
  /* const [isLoading, setIsLoading] = useState(true) */
  const { idCategory } = useParams();

  console.log(products);

  async function getItemsAsync() {
    if (!idCategory) {
      let respuesta = await getItems();
      setProducts(respuesta);
    } else {
      let respuesta = await getItemsByCategory(idCategory);
      setProducts(respuesta);
    }
  }

  useEffect(() => {
    getItemsAsync();
  }, [idCategory]);

  // 1. Render Condicional con operador ternario
  return (
    <div className="catalogo">
      {products ? (
        <ItemList products={products} />
      ) : (
        <Loader size={240} color="orange" />
      )}
    </div>
  );
}

export default ItemListContainer;
