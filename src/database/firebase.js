// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import "firebase/database";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAN4BfIIaxTmbmQFQMn_LcJRVZmOZqGKjY",
  authDomain: "zaastore8.firebaseapp.com",
  databaseURL: "https://zaastore8-default-rtdb.firebaseio.com",
  projectId: "zaastore8",
  storageBucket: "zaastore8.appspot.com",
  messagingSenderId: "174266421069",
  appId: "1:174266421069:web:0ca510c8f3bd8e462bb104",
  measurementId: "G-YEMLQFP525"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getDatabase(app);
