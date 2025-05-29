
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCKI98zzkySLBjJilvzO5x2Oq01N9XSBPg",
  authDomain: "proxym-d0ebe.firebaseapp.com",
  projectId: "proxym-d0ebe",
  storageBucket: "proxym-d0ebe.firebasestorage.app",
  messagingSenderId: "714655976581",
  appId: "1:714655976581:web:510be549ba7a77df5fadec",
  measurementId: "G-K1DGQFDP9T"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
