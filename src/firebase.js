import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyCjn_qKYBufIn1IK8QBi0KaIYs0j6_SndQ",
  authDomain: "sweteam-10.firebaseapp.com",
  databaseURL: "https://sweteam-10-default-rtdb.firebaseio.com",
  projectId: "sweteam-10",
  storageBucket: "sweteam-10.appspot.com",
  messagingSenderId: "1091431374284",
  appId: "1:1091431374284:web:84b90625b803f9ada19169",
  measurementId: "G-488M96TWYD"
});

export const auth = app.auth()
export default app
