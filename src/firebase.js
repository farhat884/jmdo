// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6dM5UrraX2PIst_UwdPXNP16EkTHPK4Y",
  authDomain: "mdo2-681ad.firebaseapp.com",
  projectId: "mdo2-681ad",
  storageBucket: "mdo2-681ad.firebasestorage.app",
  messagingSenderId: "679530889634",
  appId: "1:679530889634:web:579c3c3ed3fb20d3bfb2fb",
  measurementId: "G-LRK19JQE87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
