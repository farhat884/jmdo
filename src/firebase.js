import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCVIZrCx9lBRulQJiNq1JDXYanJCSbU44w",
  authDomain: "mdo-s2.firebaseapp.com",
  projectId: "mdo-s2",
  storageBucket: "mdo-s2.firebasestorage.app",
  messagingSenderId: "581442383347",
  appId: "1:581442383347:web:f37c83fa27ad4898f13686",
  measurementId: "G-TKGQGG1WPJ"
}

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
