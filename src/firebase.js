import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfKN1AXpXEnXj1hyaFr1-lk7uLEK-7Tiw",
  authDomain: "clone-13ee0.firebaseapp.com",
  projectId: "clone-13ee0",
  storageBucket: "clone-13ee0.appspot.com",
  messagingSenderId: "478119580343",
  appId: "1:478119580343:web:fcc85200e472270dd9f332",
  measurementId: "G-32M0QT3VJ1"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};