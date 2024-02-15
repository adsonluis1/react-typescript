import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyDjw3RJr8uQUzd7Arj52gXx9hahiA7S0JQ",
  authDomain: "pequeno-blog.firebaseapp.com",
  projectId: "pequeno-blog",
  storageBucket: "pequeno-blog.appspot.com",
  messagingSenderId: "224582231194",
  appId: "1:224582231194:web:ee55f818aec3b790ffeb23"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db }