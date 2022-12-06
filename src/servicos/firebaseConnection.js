import firebase from 'firebase/app';
import 'firebase/auth';

let firebaseConfig = {
  apiKey: "AIzaSyA2MvmrXP2zdVHBv1I5CSkVdQ-5_2CqgHA",
  authDomain: "login-22c23.firebaseapp.com",
  projectId: "login-22c23",
  storageBucket: "login-22c23.appspot.com",
  messagingSenderId: "147901765726",
  appId: "1:147901765726:web:fc6af60595a831b1227ccf",
  measurementId: "G-QJF2QZDKK9"
};

// Initialize Firebase
if (!firebase.app.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;