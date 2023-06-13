import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCP1FpqERTFVSoFGifw3pqyOh4Z-KYchEc",
  authDomain: "m12-login.firebaseapp.com",
  projectId: "m12-login",
  storageBucket: "m12-login.appspot.com",
  messagingSenderId: "78032116279",
  appId: "1:78032116279:web:6a1b8784b962405d127db2",
  measurementId: "G-YZP8575L72",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
