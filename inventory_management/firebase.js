// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0UbyFXfW6_aAiPHz6crBdK0qT4J92n6k",
  authDomain: "inventory-managment-8e6c7.firebaseapp.com",
  projectId: "inventory-managment-8e6c7",
  storageBucket: "inventory-managment-8e6c7.appspot.com",
  messagingSenderId: "999436421847",
  appId: "1:999436421847:web:345291503432603be73e92",
  measurementId: "G-J55HKP664M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };
