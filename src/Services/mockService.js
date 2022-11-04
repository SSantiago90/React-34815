/* -------------- BACK-END -------------- */
import products from "../data/data";

function getItems() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
}

export function getSingleItem() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products[4]);
    }, 2000);
  });
}

export default getItems;
