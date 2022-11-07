/* -------------- BACK-END -------------- */
function APICall() {
  let error = false;

  let promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (error){
        reject("Error");
      }
      else{
        resolve("Hola Mundo");
      }
    }, 1500);
  });
  return promesa;
}

/* -------------- FRONT-END (nuestra App de React) -------------- */
console.log("1. App iniciada.");

// Sugar-synax
async function leerApi(){ 
  let respuesta = await APICall();
  console.log(respuesta);
} 

leerApi();

console.log("3. App finalizada.");
