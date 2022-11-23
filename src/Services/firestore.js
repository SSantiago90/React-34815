import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  getDoc,  
  query,
  where
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCEgrDKdj-UOB-z_FBlg9OxvbiIYD-qjiI",
  authDomain: "react34815.firebaseapp.com",
  projectId: "react34815",
  storageBucket: "react34815.appspot.com",
  messagingSenderId: "177963625631",
  appId: "1:177963625631:web:85c70921db338bac0586aa",
};

const app = initializeApp(firebaseConfig);

// 0. Inicializamos Firestore
const DB = getFirestore(app);

//1. Traer todos los documentos
export default async function getItems() {
  //1.A Referenciamos nuestra colección
  const colectionProductsRef = collection(DB, "products");
  //1.B Solicitamos todos los documentos de la colección
  const documentSnapshot = await getDocs(colectionProductsRef);

  const documentsData = documentSnapshot.docs.map((doc) => {
    /* let docDataWithId = doc.data();
    docDataWithId.id = doc.id; */
    // spread operator
    return {
      ...doc.data(),
      id: doc.id,
    };
  });
  // resolve
  return documentsData;
}

//2. Traer un documento por ID
export async function getSingleItem(idParams) {
  const docRef = doc(DB, "products", idParams);

  const docSnapshot = await getDoc(docRef);

  const itemData = docSnapshot.data();
  itemData.id = docSnapshot.id;

  return itemData;
}

//3. Traer todos los  documentos según categoria
export async function getItemsByCategory(categoryParams) {
  const collectionRef = collection(DB, "products");

  const queryCat = query(collectionRef, where("category", "==",categoryParams ))

  const documentSnapshot = await getDocs(queryCat);

  const documentsData = documentSnapshot.docs.map((doc) => {
    /* let docDataWithId = doc.data();
    docDataWithId.id = doc.id; */
    // spread operator
    return {
      ...doc.data(),
      id: doc.id,
    };
  });
  // resolve
  return documentsData;
}
