
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyAAmmpp6r1q23-CImpN-wabeF7HouXL2LA",
    authDomain: "crud2-app.firebaseapp.com",
    projectId: "crud2-app",
    storageBucket: "crud2-app.appspot.com",
    messagingSenderId: "472654421376",
    appId: "1:472654421376:web:e07f5d6b5c874416a6f565"
  };

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
