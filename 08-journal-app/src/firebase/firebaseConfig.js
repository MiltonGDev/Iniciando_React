import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD5l0q4MDcA5gdXT7gqvHfw_prF1e49qB0",
  authDomain: "react-apps-d4227.firebaseapp.com",
  projectId: "react-apps-d4227",
  storageBucket: "react-apps-d4227.appspot.com",
  messagingSenderId: "1018728017069",
  appId: "1:1018728017069:web:de5d8698a9686412962a24"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}