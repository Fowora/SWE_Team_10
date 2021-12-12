// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCjn_qKYBufIn1IK8QBi0KaIYs0j6_SndQ",
    authDomain: "sweteam-10.firebaseapp.com",
    projectId: "sweteam-10",
    storageBucket: "sweteam-10.appspot.com",
    messagingSenderId: "1091431374284",
    appId: "1:1091431374284:web:84b90625b803f9ada19169",
    measurementId: "G-488M96TWYD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);