
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAzP1FZ33fhyLsHH-AjS20AmzfqTPt1f64",
  authDomain: "elitenotebooks-backend.firebaseapp.com",
  projectId: "elitenotebooks-backend",
  storageBucket: "elitenotebooks-backend.firebasestorage.app",
  messagingSenderId: "743810996289",
  appId: "1:743810996289:web:a75a6b13cb4fc2d2414ec0"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);