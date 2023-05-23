// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFhhx_I_g4pIvxZeBVJI8hOUgdC54tCks",
  authDomain: "weather-ac140.firebaseapp.com",
  projectId: "weather-ac140",
  storageBucket: "weather-ac140.appspot.com",
  messagingSenderId: "319258263734",
  appId: "1:319258263734:web:ec51c00b0cbc4d9e71a617",
  measurementId: "G-RYR9GD7CXP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);