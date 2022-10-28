import Item from "./Item";
import "./itemlist.css";

function ItemListContainer() {
  return (
    <div className="item-list">
      <Item
        imgurl="https://http2.mlstatic.com/D_NQ_NP_638191-MLA51082238357_082022-W.webp"
        title="Remera X"
        price={100}
        color="firebrick"
      />
      <Item
        imgurl="/imgs/pantalonY.webp"
        title="Pantalón Y"
        price={200}
        color="purple"
      />
      <Item
        imgurl="https://http2.mlstatic.com/D_NQ_NP_667729-MLA49423449452_032022-W.webp"
        title="Zapatillas Z"
        price={500}
        color="darkgreen"
      />
    </div>
  );
}

export default ItemListContainer;
