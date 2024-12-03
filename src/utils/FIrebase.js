// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDl6oBs2qnPX0GDRf3aZBcPr_q6UALGDuA",
  authDomain: "netflixgpt-1b807.firebaseapp.com",
  projectId: "netflixgpt-1b807",
  storageBucket: "netflixgpt-1b807.firebasestorage.app",
  messagingSenderId: "110138800402",
  appId: "1:110138800402:web:7491939e8c46e22c819bcb",
  measurementId: "G-Z2Q8SYPFSQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
