import Item from "./Item";

function ItemListContainer(props) {
  return (
    <div>
      <h1>{props.greeting}</h1>
      <Item
        imgurl="https://http2.mlstatic.com/D_NQ_NP_638191-MLA51082238357_082022-W.webp"
        title="Remera X"
        price={100}
      />
      <Item imgurl="/imgs/pantalonY.webp" title="Pantalón Y" price={200} />
      <Item
        imgurl="https://http2.mlstatic.com/D_NQ_NP_667729-MLA49423449452_032022-W.webp"
        title="Zapatillas Z"
        price={500}
      />
    </div>
  );
}

export default ItemListContainer;
