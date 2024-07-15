import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCULZux9UyFpLcb-WAmWuUh3c9bKiqnolk",
  authDomain: "social-media-app-raven.firebaseapp.com",
  projectId: "social-media-app-raven",
  storageBucket: "social-media-app-raven.appspot.com",
  messagingSenderId: "49947867280",
  appId: "1:49947867280:web:fb4b58cf6032aad8e88015"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);