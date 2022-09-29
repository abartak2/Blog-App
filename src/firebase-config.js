// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getStorage } from "firebase/storage";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1R4b6ZB8LdjoKWPt8CDpiGQ3Ts0oWBN4",
  authDomain: "blog-app-188c1.firebaseapp.com",
  projectId: "blog-app-188c1",
  storageBucket: "blog-app-188c1.appspot.com",
  messagingSenderId: "950879663450",
  appId: "1:950879663450:web:ec6dc5840e0d73ce16af63",
  measurementId: "G-45YHBYKQQN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
// const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
