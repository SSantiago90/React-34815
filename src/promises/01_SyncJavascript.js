/* -------------- BACK-END -------------- */
function APICall() {
  setTimeout(() => {
    console.log("API call completed");
    return {
      id: "1",
      name: "Mi producto",
      description: "El mejor producto de la tienda",
      stock: 9,
    };
  }, 1500);
}

/* -------------- FRONT-END (nuestra App de React) -------------- */
console.log("App iniciada.");

let respuestaAPI = APICall();

console.log(`Respuesta: ${respuestaAPI}`);

console.log("App finalizada.");
