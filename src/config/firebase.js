// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAsONOpAy_Z5pdvJx1TFQdmcLraIikgbr8",
  authDomain: "alfasoft-test-2ede3.firebaseapp.com",
  projectId: "alfasoft-test-2ede3",
  storageBucket: "alfasoft-test-2ede3.appspot.com",
  messagingSenderId: "482949126712",
  appId: "1:482949126712:web:9918bf01d8c3924d6ae4cd",
  measurementId: "G-WXX125HSTW"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const contactsCollectionRef = collection(db, 'contacts');