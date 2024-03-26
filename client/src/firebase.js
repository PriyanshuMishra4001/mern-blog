// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// console.log(import.meta.env.VITE_FIREBASE_API_KEY);
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-cc273.firebaseapp.com",
  projectId: "mern-blog-cc273",
  storageBucket: "mern-blog-cc273.appspot.com",
  messagingSenderId: "668504738740",
  appId: "1:668504738740:web:bebbe26bf4bc9cd95f40e1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);