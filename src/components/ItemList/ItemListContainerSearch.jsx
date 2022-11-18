import { useState, useEffect, useCallback } from "react";
import "./itemlist.css";
import { getSearchItems } from "../../Services/mockService";

import ItemList from "./ItemList";
import Loader from "../Loaders/Loader";

function ItemListContainerSearch() {
  const [products, setProducts] = useState(null);
  const [searchKeyword, setSearchKeyword] = useState("");

  async function getItemsAsync() {
    let respuesta = await getSearchItems(searchKeyword);
    setProducts(respuesta);
  }

  function handleFavorite(id) {
    console.log("item agregado a favoritos:", id);
  }

  const handleFavoriteMemo = useCallback(handleFavorite, []);

  useEffect(() => {
    getItemsAsync();
  }, []);

  function handleSearch(evt) {
    setSearchKeyword(evt.target.value);
  }

  function handleSearchForm(evt) {
    evt.preventDefault();
    getItemsAsync();
  }

  return (
    <div className="catalogo">
      <form onSubmit={handleSearchForm}>
        <label>
          Buscar🔎:
          <input onChange={handleSearch} name="search"></input>
          <button type="submit">Buscar</button>
        </label>
      </form>
      {products ? <ItemList handleFavorite={handleFavorite} products={products} /> : <Loader />}
    </div>
  );
}

export default ItemListContainerSearch;
