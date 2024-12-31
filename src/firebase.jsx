// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7cHxZiGeJfLg2lPAMDD2t5-_a8uBEHIQ",
  authDomain: "to-do-list-dd608.firebaseapp.com",
  projectId: "to-do-list-dd608",
  storageBucket: "to-do-list-dd608.firebasestorage.app",
  messagingSenderId: "451080964598",
  appId: "1:451080964598:web:e0b9656a47eb5617d99fd7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
