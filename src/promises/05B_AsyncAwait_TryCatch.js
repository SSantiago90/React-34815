// get a random number, and return true if number is > 50
function randomError() {
  return Math.random() > 0.01;
}

function APIcall() {
  return new Promise((resolve, reject) => {
    const data = {
      id: "1",
      name: "Mi producto",
      description: "El mejor producto de la tienda",
      stock: 9,
    };
    setTimeout(() => {
      if (randomError() === false) {
        console.log("resolviendo...");
        resolve(data);
      } else {
        console.error("rechazando...");
        reject("Error en la llamada a la API");
      }
    }, 1500);
  });
}

console.log("App iniciada!");

async function app() {
  try {
    let resAPI = await APIcall();
    console.log(`Respuesta: ${resAPI.name}`);
  } catch (error) {
    console.error(`Error Promise: ${error}`);
  } finally {
    console.log("App finalizada.");
  }
}

app();
