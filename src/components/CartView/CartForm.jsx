import { useState } from "react";
import MyButton from "../MyButton/MyButton";

export default function CartForm(props) {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  function onInputChange(evt) {
    let nameInput = evt.target.name;
    let value = evt.target.value;

    // dynamic properties
    let newData = { ...data };
    newData[nameInput] = value;
    setData(newData);
  }

  function onSubmit(evt) {
    if (data.name.length === 0) return;

    evt.preventDefault();
    props.onSubmit(data);
  }

  return (
    <form onSubmit={onSubmit}>
      {/* Podriamos convertir los inputs en Componentes */}
      <div style={{ display: "flex", marginBottom: 8 }}>
        <label htmlFor="name" style={{ width: "100px", marginRight: 4 }}>
          Nombre
        </label>
        <input
          required
          value={data.name}
          name="name"
          type="text"
          onChange={onInputChange}
        />
      </div>

      <div style={{ display: "flex", marginBottom: 8 }}>
        <label htmlFor="email" style={{ width: "100px", marginRight: 4 }}>
          Email
        </label>
        <input
          required
          value={data.email}
          name="email"
          type="email"
          onChange={onInputChange}
        />
      </div>

      <div style={{ display: "flex", marginBottom: 8 }}>
        <label htmlFor="phone" style={{ width: "100px", marginRight: 4 }}>
          Teléfono
        </label>
        <input
          required
          value={data.phone}
          name="phone"
          type="phone"
          onChange={onInputChange}
        />
      </div>

      <button
        disabled={data.name === "" || data.phone === "" || data.email === ""}
        type="submit"
      >
        Finalizar Compra
      </button>
    </form>
  );
}
