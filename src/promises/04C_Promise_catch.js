/* --------- Back-end --------- */
function APICall() {
  const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: "1",
        name: "Mi producto",
        description: "El mejor producto de la tienda",
        stock: 9,
      });
      console.log("API call completed");
    }, 2500);
  });
  return promesa;
}

/* --------- Front-end --------- */
console.log("1. App iniciada.");

APICall()
  .then(
    (responseResolved) => {
      throw new Error("Error en .then ");
    },
    (errorRejected) => {
      console.log("Error.", errorRejected);
    }
  )
  .catch((errorMessage) => {
    console.log("error:", errorMessage);
  });

console.log("3. App finalizada.");
