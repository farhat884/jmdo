import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC6dM5UrraX2PIst_UwdPXNP16EkTHPK4Y",
  authDomain: "mdo2-681ad.firebaseapp.com",
  projectId: "mdo2-681ad",
  storageBucket: "mdo2-681ad.firebasestorage.app",
  messagingSenderId: "679530889634",
  appId: "1:679530889634:web:579c3c3ed3fb20d3bfb2fb",
  measurementId: "G-LRK19JQE87"
};

const app = initializeApp(firebaseConfig);
console.log("✅ Firebase connected");

export const db = getFirestore(app);
