// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

  const firebaseConfig = {
  apiKey: "AIzaSyB9mwnsLF08yxYBxd3g3jnbUg3B-2sPtps",
  authDomain: "codebridge-auth.firebaseapp.com",
  projectId: "codebridge-auth",
  storageBucket: "codebridge-auth.appspot.com",
  messagingSenderId: "462129557407",
  appId: "1:462129557407:web:4e78cce202c87b096ed7aa",
  measurementId: "G-KM1VXQQ2RP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth (app);

