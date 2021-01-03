import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB6ZCNCnKQd7cVy8dCTgZ3oDtPeQyA6hEI",
  authDomain: "portfolip-p15.firebaseapp.com",
  databaseURL: "https://portfolip-p15.firebaseio.com",
  projectId: "portfolip-p15",
  storageBucket: "portfolip-p15.appspot.com",
  messagingSenderId: "41908079732",
  appId: "1:41908079732:web:7b331cafb509e5032fd521",
  measurementId: "G-Q0J154D5N8",
});

const db = firebaseApp.firestore();

export default db;
