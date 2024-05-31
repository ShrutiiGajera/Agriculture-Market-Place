// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase, ref } from "firebase/database"; // Add this line to import Realtime Database functions

const firebaseConfig = {
  apiKey: "AIzaSyBRWI4fAbodtp7CAI42vx9n4BBfKYYmH80",
  authDomain: "farmix-2c039.firebaseapp.com",
  projectId: "farmix-2c039",
  storageBucket: "farmix-2c039.appspot.com",
  messagingSenderId: "924634154473",
  appId: "1:924634154473:web:ebe7e529b5861c81f77778",
  measurementId: "G-E6W4VJNYHS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app);
const database = getDatabase(app); // Initialize Realtime Database

export {auth, database,ref};