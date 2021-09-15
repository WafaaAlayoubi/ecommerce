import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbZ6ORTq2B71lynJds8gSG3CBowkTjFGQ",
  authDomain: "auth-48dc4.firebaseapp.com",
  projectId: "auth-48dc4",
  storageBucket: "auth-48dc4.appspot.com",
  messagingSenderId: "710548800298",
  appId: "1:710548800298:web:2d390791bb7d78ecc8d453",
  measurementId: "G-E20H74C9TX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);