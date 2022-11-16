import "./itemdetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";

function ItemDetail({ product }) {
  const { addToCart } = useContext(cartContext);

  function onAddToCart(count) {
    alert(`Agregaste ${count} items al carrito!`);
    /* setState(count) */
    addToCart(product, count);
  }

  return (
    <div className="card-detail">
      <div className="card-detail_img">
        <img src={product.imgurl} alt="Product img" />
      </div>
      <div className="card-detail_detail">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <h4 className="priceTag">$ {product.price}</h4>
      </div>
      <ItemCount onAddToCart={onAddToCart} stock={product.stock} />
    </div>
  );
}

export default ItemDetail;
