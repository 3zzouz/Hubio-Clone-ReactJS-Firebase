import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDE7JddUe7KKWh9KyuUm-scUK7gAXzFcC8",
  authDomain: "hubio-clone.firebaseapp.com",
  projectId: "hubio-clone",
  storageBucket: "hubio-clone.appspot.com",
  messagingSenderId: "197743272455",
  appId: "1:197743272455:web:8491ed868e896a50dfc0a2",
  measurementId: "G-L2J9WLPBS4",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
