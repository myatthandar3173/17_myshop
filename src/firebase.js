// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDNEjZDmjoeyF7LCWnPThDm_ek-7-tZr5k",
    authDomain: "react-ecsite-2d516.firebaseapp.com",
    projectId: "react-ecsite-2d516",
    storageBucket: "react-ecsite-2d516.firebasestorage.app",
    messagingSenderId: "74840964714",
    appId: "1:74840964714:web:993e4a3a88b75a0029d413"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
