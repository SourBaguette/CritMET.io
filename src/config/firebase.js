// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAf1WlRTJEn3K2hB65asjKQ1oBDk0biHgc",
  authDomain: "critmet-ocean-lab.firebaseapp.com",
  projectId: "critmet-ocean-lab",
  storageBucket: "critmet-ocean-lab.appspot.com",
  messagingSenderId: "934634764380",
  appId: "1:934634764380:web:23926b727dc22578f0ce99",
  measurementId: "G-RG73D3X1JM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const storage = getStorage(app);

export const db = getFirestore(app);

export const auth = getAuth(app);
