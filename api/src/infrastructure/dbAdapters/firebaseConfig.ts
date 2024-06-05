// Import the functions you need from the SDKs you need
import { getFirestore } from "@firebase/firestore";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3T0-tGGfddra9tguxw7SJIA84lTJtYzE",
  authDomain: "property-scrap.firebaseapp.com",
  projectId: "property-scrap",
  storageBucket: "property-scrap.appspot.com",
  messagingSenderId: "1070116120748",
  appId: "1:1070116120748:web:e42e51ac6ade7a5f8bd709",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
