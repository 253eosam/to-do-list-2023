// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || process.env.VITE_FIREBASE_API_KEY,
  authDomain: "to-do-list-2023-f2afd.firebaseapp.com",
  projectId: "to-do-list-2023-f2afd",
  storageBucket: "to-do-list-2023-f2afd.appspot.com",
  messagingSenderId: "811407593169",
  appId: "1:811407593169:web:f85a720810374ad684fff0",
  measurementId: "G-ZDMYN83WM1",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
getAuth(app)

