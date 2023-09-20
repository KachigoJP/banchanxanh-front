// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDjnhVwQ35xhnIxPW2ubSTcEtNzQr8YV_E",
    authDomain: "banchanxanh.firebaseapp.com",
    databaseURL:
        "https://banchanxanh-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "banchanxanh",
    storageBucket: "banchanxanh.appspot.com",
    messagingSenderId: "635518263206",
    appId: "1:635518263206:web:d22073852d149fd420f967",
    measurementId: "G-VMYM39W50R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const fbDatabase = getDatabase(app);
