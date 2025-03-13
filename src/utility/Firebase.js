// Import the functions you need from the SDKs you need
import  firebase  from "firebase/compat/app";
//to use authentication we have to import auth from fire store
import { getAuth } from "firebase/auth";
//to get data from fire db we have to import
import "firebase/compat/firestore";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwftWWpLokbFevXeC1T4ptryyRjRk6pX8",
  authDomain: "clone-8e84f.firebaseapp.com",
  projectId: "clone-8e84f",
  storageBucket: "clone-8e84f.firebasestorage.app",
  messagingSenderId: "591517696073",
  appId: "1:591517696073:web:6d0a13dea59f9d08c43f98",
  measurementId: "G-Q9XP4N3TRJ"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = app.firestore()