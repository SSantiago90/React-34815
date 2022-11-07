// get a random number, and return true if number is > 50
function randomError() {
  return Math.random() > 0.5;
}

/* --------- Back-end --------- */
function APICall() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (randomError()) {
        reject(new Error("Error obteniendo datos de la API"));
      } else {
        resolve({
          id: "1",
          name: "Mi producto",
          description: "El mejor producto de la tienda",
          stock: 9,
        });
        console.log("<BACKEND: API call completed>");
      }
    }, 2500);
  });
}

/* --------- Front-end --------- */
console.log("1. App iniciada.");

function handleResolve(response) {
  console.log("Resuelta:", response);
}

function handleReject(response) {
  console.log("Rechazada:", response);
}

APICall().then(handleResolve, handleReject);

console.log("3. App finalizada.");
