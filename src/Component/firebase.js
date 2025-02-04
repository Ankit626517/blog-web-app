// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0y5OY4md39Pc1KHcgPK5PqTBy4xytdyc",
  authDomain: "blog-auth-1b882.firebaseapp.com",
  projectId: "blog-auth-1b882",
  storageBucket: "blog-auth-1b882.firebasestorage.app",
  messagingSenderId: "631426180845",
  appId: "1:631426180845:web:bca9b75d888f61c7264ee4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// export const auth = getAuth();
// export const db = getFirestore(app)
// export default app;

export const auth=getAuth();
export default app;
