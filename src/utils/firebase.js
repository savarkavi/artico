import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-app-453cf.firebaseapp.com",
  projectId: "blog-app-453cf",
  storageBucket: "blog-app-453cf.appspot.com",
  messagingSenderId: "1097599778474",
  appId: "1:1097599778474:web:16dc19b580fa61c7929ad3",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
