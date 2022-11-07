// get a random number, and return true if number is > 50
function randomError() {
  return Math.random() > 0.99;
}

/* --------- Back-end --------- */
function APICall() {
  return new Promise((resolve, reject) => {

    setTimeout(
      () => {
        if (randomError()) {
          reject(new Error("Error obteniendo datos de la API"));
        } 

        else {
          resolve({
            id: "1",
            name: "Mi producto",
            description: "El mejor producto de la tienda",
            stock: 9,
          });
          console.log("<BACKEND: API call completed>");
        }
      }, 
    2500);
  });
}

/* --------- Front-end --------- */
console.log("1. App iniciada.");

APICall().then(
  (responseResolved) => {
    console.log("2.", responseResolved);
  },
  (errorRejected) => {
    console.log("Error.", errorRejected);
  }
);

console.log("3. App finalizada.");
