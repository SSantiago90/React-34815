/* -------------- BACK-END -------------- */
import products from "../data/data";

function getItems(idCategory) {
  return new Promise((resolve) => {
    if (idCategory === undefined) {
      setTimeout(() => {
        resolve(products);
      }, 1000);
    } else {
      setTimeout(() => {
        let itemsRequested = products.filter(
          (item) => item.category === idCategory
        );
        resolve(itemsRequested);
      }, 1000);
    }
  });
}

export function getSearchItems(keyword) {
  keyword = keyword.trim().toLowerCase();
  
  return new Promise((resolve) => {
    setTimeout(() => {
      if (keyword.length === 0) {
        resolve(products);
      } else {
        let itemsRequested = products.filter((item) =>
          item.title.toLowerCase().includes(keyword)
        );
        resolve(itemsRequested);
      }
    }, 1000);
  });
}

export function getSingleItem(idParam) {
  return new Promise((resolve, reject) => {
    let itemRequested = products.find((item) => item.id === Number(idParam));

    if (itemRequested === undefined) reject("Item no encontrado");

    setTimeout(() => {
      resolve(itemRequested);
    }, 1000);
  });
}

export default getItems;
