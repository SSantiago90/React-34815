import { useState, useEffect } from "react";
import { getSingleItem } from "../../Services/firestore";
import ItemDetail from "./ItemDetail";

import { useParams } from "react-router-dom";
import Loader from "../Loaders/Loader";

function ItemDetailContainer() {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { idItem } = useParams();

  async function getItemsAsync() {
    getSingleItem(idItem).then((respuesta) => {
      setProduct(respuesta);
      setIsLoading(false);
    });
  }

  // if

  useEffect(() => {
    getItemsAsync();
  }, []);

  // 2. if -> retorno anticipado / early return
  if (isLoading) return <Loader />;

  return <ItemDetail product={product} />;
}
export default ItemDetailContainer;
