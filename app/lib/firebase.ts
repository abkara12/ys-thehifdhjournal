// lib/firebase.ts
import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBAKzl25Up0Mw2YAo-09znGkpPmjagaZyc",
  authDomain: "ys-thehifdhjournal.firebaseapp.com",
  projectId: "ys-thehifdhjournal",
  storageBucket: "ys-thehifdhjournal.firebasestorage.app",
  messagingSenderId: "672456122321",
  appId: "1:672456122321:web:31188d67ed1de640ba0af0"
};

const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
