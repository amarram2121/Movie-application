// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMoSXOJJHRC2QQIkxCJx-y838r-RxfDOM",
  authDomain: "competitun-task.firebaseapp.com",
  projectId: "competitun-task",
  storageBucket: "competitun-task.appspot.com",
  messagingSenderId: "59372103696",
  appId: "1:59372103696:web:cf0a90a0cb3a34a0cec295",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const db = getDatabase(app);
