// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider,EmailAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzxxWg4MCVVv9d0tqEwFFEiWtBxIKFb2w",
  authDomain: "recruitment-app-63364.firebaseapp.com",
  projectId: "recruitment-app-63364",
  storageBucket: "recruitment-app-63364.appspot.com",
  messagingSenderId: "510366399562",
  appId: "1:510366399562:web:c274e88e3134cf442cfab3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider= new GoogleAuthProvider();
