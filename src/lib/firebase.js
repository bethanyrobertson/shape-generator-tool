// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJjdfKa3JZFySTAaWGQGP8xmlOeSzHVOc",
  authDomain: "colorcombinations-8c60d.firebaseapp.com",
  projectId: "colorcombinations-8c60d",
  storageBucket: "colorcombinations-8c60d.firebasestorage.app",
  messagingSenderId: "621886598104",
  appId: "1:621886598104:web:7ed3577d92ae789384a0ad",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export { app, db }

