// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC23O5_VnbPuPWXg5PfppP_xyD7HW7iMIM",
  authDomain: "blog-5093b.firebaseapp.com",
  projectId: "blog-5093b",
  storageBucket: "blog-5093b.appspot.com",
  messagingSenderId: "1025765136105",
  appId: "1:1025765136105:web:b2db4718aacbbb7e770278",
  measurementId: "G-BMDWWMGNYG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
