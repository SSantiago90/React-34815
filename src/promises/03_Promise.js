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

/* --------- Front-end --------- */
console.log("1. App iniciada.");

APICall().then(
  (responseResolved) => {
    console.log("2.", responseResolved);
  } 
);

console.log("3. App finalizada.");
