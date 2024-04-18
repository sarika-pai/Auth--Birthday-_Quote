// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase} from "firebase/database";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
//< Your Api Keys Here>
const firebaseConfig = {
  apiKey: "Your API key",
  authDomain: "Your authDomain",
  databaseURL: "Your database URL",
  projectId: "Your Project Id",
  storageBucket: "Your storage Bucket",
  messagingSenderId: "Your messagingSenderId",
  appId: "Your app Id"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);






