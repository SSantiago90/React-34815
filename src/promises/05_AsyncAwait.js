/* --------- Back-end --------- */
function APICall() {
  const promesa = new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: "1",
        name: "Mi producto",
        description: "El mejor producto de la tienda",
        stock: 9,
      });
      console.log("<BACKEND: API call completed>");
    }, 2500);
  });
  return promesa;
}

/* -------------- FRONT-END (nuestra App de React) -------------- */
console.log("App iniciada.");

async function leerPromise() {
  let respuestaAPI = await APICall(); 
  console.log(`Respuesta: ${respuestaAPI.name}`);
  return respuestaAPI;
}

leerPromise();

console.log("App finalizada.");
