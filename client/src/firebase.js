// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE,
  authDomain: "mern-blog-d2ded.firebaseapp.com",
  projectId: "mern-blog-d2ded",
  storageBucket: "mern-blog-d2ded.appspot.com",
  messagingSenderId: "359891960827",
  appId: "1:359891960827:web:81aaa24af1a013b037015e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
