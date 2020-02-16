import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyDrx6QXL1aKx1-gw9ACN4LJDZaTeDF_e3Q",
  authDomain: "slackchatclone.firebaseapp.com",
  databaseURL: "https://slackchatclone.firebaseio.com",
  projectId: "slackchatclone",
  storageBucket: "slackchatclone.appspot.com",
  messagingSenderId: "801586367434",
  appId: "1:801586367434:web:d538a341ed1c26a2fb1d33",
  measurementId: "G-PK7JNG9YJH"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
