import React from "react";
import "./App.css";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";

function App() {
  const styleH3 = { backgroundColor: "darkred", color: "white" };
  let titulo = <h3 style={styleH3}>Hola Comisión #34815!🚀</h3>;

  return (
    <>
      <div className="App">
        <NavBar />
        {titulo}
        {/* <ItemListContainer /> */}
        <ItemDetailContainer />
      </div>
    </>
  );
}

export default App;
