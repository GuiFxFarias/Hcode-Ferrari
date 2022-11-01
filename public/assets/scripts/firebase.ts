// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCar6Kd62JNhblZPkjhmxqEnVdV3frtWy8",
  authDomain: "hcodelab-js-e9846.firebaseapp.com",
  projectId: "hcodelab-js-e9846",
  storageBucket: "hcodelab-js-e9846.appspot.com",
  messagingSenderId: "812090422597",
  appId: "1:812090422597:web:9803371bce558192afba2c",
  measurementId: "G-D0TF8101YF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
