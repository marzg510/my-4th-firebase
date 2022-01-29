// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnB9FWbC1Le4Fy2sgjCY-peD_DVX7_wcw",
  authDomain: "my-4th-firebase.firebaseapp.com",
  projectId: "my-4th-firebase",
  storageBucket: "my-4th-firebase.appspot.com",
  messagingSenderId: "504875649325",
  appId: "1:504875649325:web:acdd7bfd3598780781aba4",
  measurementId: "G-TJL0JQ0033"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
