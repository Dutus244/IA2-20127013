import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBvaUtUMusSdM1pma81P-hBuTAP_jZHciQ",
    authDomain: "rudichoi.firebaseapp.com",
    projectId: "rudichoi",
    storageBucket: "rudichoi.appspot.com",
    messagingSenderId: "994113817197",
    appId: "1:994113817197:web:29d966049c9611f0bc8d64"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };