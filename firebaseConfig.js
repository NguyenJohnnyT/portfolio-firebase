// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDA5y-SwEBBdguqjXt1rtQ8UPmNL3DzYqc",
  authDomain: "jtn-portfolio.firebaseapp.com",
  projectId: "jtn-portfolio",
  storageBucket: "jtn-portfolio.appspot.com",
  messagingSenderId: "109472140187",
  appId: "1:109472140187:web:9a9dcc47d6c305eaf56f3e",
  measurementId: "G-27SJT40B77",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);
const analytics = getAnalytics(app);
