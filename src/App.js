import logo from "./logo.svg";
import "./App.css";

function App() {
  const title = "Bienvenidos a la clase 3";

  /* CSS-in-JS */
  const styleH3 = { backgroundColor: "blue", color: "white" };

  let titulo = <h3 style={styleH3}>Hola</h3>;

  return (
    <>
      {/* UI */}
      {titulo}
      <div className="App">
        {/* camelCase */}
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{title}</p>
          <h2>{1 + 2 + 3}</h2>
        </header>
      </div>
    </>
  );
}

export default App;
