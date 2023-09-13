// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKVcOnhu0qLTFbKxKFZP2qIXF6qGRoNGY",
  authDomain: "movie-app-task-1.firebaseapp.com",
  projectId: "movie-app-task-1",
  storageBucket: "movie-app-task-1.appspot.com",
  messagingSenderId: "344101360186",
  appId: "1:344101360186:web:89c03d8da0da01036f1b03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);




