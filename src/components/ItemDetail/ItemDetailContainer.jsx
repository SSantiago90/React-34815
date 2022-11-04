import { useState, useEffect } from "react";
import { getSingleItem } from "../../Services/mockService";

function ItemDetailContainer() {
  const [product, setProduct] = useState([]);

  async function getItemsAsync() {
    let respuesta = await getSingleItem();
    setProduct(respuesta);
  }

  useEffect(() => {
    getItemsAsync();
  }, []);

  return (
    <div className="item-list">
      <h3>{product.title}</h3>
      <img src={product.imgurl} />
    </div>
  );
}

export default ItemDetailContainer;
