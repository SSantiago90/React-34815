import Item from "./Item";
import "./itemlist.css";
import products from "../../data/data";

function ItemListContainer() {
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
