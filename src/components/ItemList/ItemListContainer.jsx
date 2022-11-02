import { useState, useEffect } from "react";

import Item from "./Item";
import "./itemlist.css";
import getItems from "../../Services/mockService";

function ItemListContainer() {
  const [products, setProducts] = useState([]);

  async function getItemsAsync() {
    let respuesta = await getItems();
    setProducts(respuesta);
  }

  useEffect(() => {
    getItemsAsync();
  }, []);

  return (
    <div className="item-list">
      {products.map((product) => {
        return (
          <Item
            key={product.id}
            imgurl={product.imgurl}
            title={product.title}
            price={product.price}
            category={product.category}
            color="darkgreen"
          />
        );
      })}
    </div>
  );
}

export default ItemListContainer;
