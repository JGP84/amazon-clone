import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDl1G5ln4U-op5R2nOv_es0hXs2i5-li9U",
  authDomain: "amz-clon.firebaseapp.com",
  databaseURL: "https://amz-clon.firebaseio.com",
  projectId: "amz-clon",
  storageBucket: "amz-clon.appspot.com",
  messagingSenderId: "425390625687",
  appId: "1:425390625687:web:7c0b6e7ef23b3723e02ad2",
  measurementId: "G-NQJGNH7BBB",
});


const auth = firebase.auth();

export { auth };