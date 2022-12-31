// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzZmVTuuwx3TgoVLJg_yu35cJpgrsrNM4",
  authDomain: "ecommerce-vinoteca-f7b4f.firebaseapp.com",
  projectId: "ecommerce-vinoteca-f7b4f",
  storageBucket: "ecommerce-vinoteca-f7b4f.appspot.com",
  messagingSenderId: "928881064654",
  appId: "1:928881064654:web:5ee99732b39c51d26dee9f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
