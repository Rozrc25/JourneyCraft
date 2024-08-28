// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAho_ujY0gbtDh1Ku0HcPBaAJvgoQjJaxg",
  authDomain: "journeycraft-a51c2.firebaseapp.com",
  projectId: "journeycraft-a51c2",
  storageBucket: "journeycraft-a51c2.appspot.com",
  messagingSenderId: "1053043967890",
  appId: "1:1053043967890:web:fdfa1da00a45e133b5a34b",
  measurementId: "G-56X8CPJGWW"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
