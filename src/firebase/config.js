import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBNIl7qAaIjDtlE47cIlBBlQh6YV8XoNIY",
    authDomain: "noname-9c8e4.firebaseapp.com",
    projectId: "noname-9c8e4",
    storageBucket: "noname-9c8e4.appspot.com",
    messagingSenderId: "125648104266",
    appId: "1:125648104266:web:236f005f52fbeb1d686fb3"
  };
  

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); 