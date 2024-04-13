// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase} from "firebase/database";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB80Jy12dwwAIqJT2-WKqYQFR8LKLXNFAM",
  authDomain: "project-7594828580836127346.firebaseapp.com",
  databaseURL: "https://project-7594828580836127346-default-rtdb.firebaseio.com",
  projectId: "project-7594828580836127346",
  storageBucket: "project-7594828580836127346.appspot.com",
  messagingSenderId: "216524113332",
  appId: "1:216524113332:web:de44c809a7b301098d9ee1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);






