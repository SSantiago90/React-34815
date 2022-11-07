function APICall(callback) {
  setTimeout(() => {
    console.log("API call completed");
    callback({
      id: "1",
      name: "Mi producto",
      description: "El mejor producto de la tienda",
      stock: 9,
    });
  }, 5500);
}

console.log("1. App iniciada.");

function handleRespuesta(respuesta) {
  console.log("3.", respuesta);
}

APICall(handleRespuesta);

console.log("2. App finalizada.");
