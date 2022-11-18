import React, {memo} from "react";
import Item from "./Item";

function ItemList({ products, handleFavorite}) {
  return (
    <div className="item-list">
      {products.map((product) => {
        return (
          <Item
            key={product.id}
            id={product.id}
            imgurl={product.imgurl}
            title={product.title}
            price={product.price}
            stock={product.stock}
            category={product.category}
            discount={product.discount}
            handleFavorite={handleFavorite}
            color="darkgreen"
          />
        );
      })}
    </div>
  );
}

export default memo(ItemList);
