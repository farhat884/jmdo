import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // ... config kamu
};

const app = initializeApp(firebaseConfig);
console.log("✅ Firebase connected");

export const db = getFirestore(app);
