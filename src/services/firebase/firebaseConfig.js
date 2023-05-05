import {getFirestore} from "firebase/firestore"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBk64kUm1Hh66_OY7L72siNjZx9xqWz-Vc",
  authDomain: "my-first-ecommerce-e4571.firebaseapp.com",
  projectId: "my-first-ecommerce-e4571",
  storageBucket: "my-first-ecommerce-e4571.appspot.com",
  messagingSenderId: "1038447655856",
  appId: "1:1038447655856:web:eb9cc5c4fa43520a85f475"
};


export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)