// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLub3QrBolLvD39QexcwWthoZXsRTv68w",
  authDomain: "fb-db-auth-a7adb.firebaseapp.com",
  databaseURL: "https://fb-db-auth-a7adb-default-rtdb.firebaseio.com",
  projectId: "fb-db-auth-a7adb",
  storageBucket: "fb-db-auth-a7adb.appspot.com",
  messagingSenderId: "651789898695",
  appId: "1:651789898695:web:2aaf2d65cde5485919bfe2",
  measurementId: "G-RZQBP809YH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// const auth = getAuth();

export default app;
