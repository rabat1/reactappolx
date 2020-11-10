import * as firebase from 'firebase/app';
import 'firebase/database';
import "firebase/auth";
var firebaseConfig = {
    apiKey: "AIzaSyAfR7lguq3bkELktHkOicQP8RrP-B40RB4",
    authDomain: "fir-project-146f5.firebaseapp.com",
    databaseURL: "https://fir-project-146f5.firebaseio.com",
    projectId: "fir-project-146f5",
    storageBucket: "fir-project-146f5.appspot.com",
    messagingSenderId: "101541068719",
    appId: "1:101541068719:web:92acf4617fb8893331b95a",
    measurementId: "G-2M6CVZ991C"
  };
  // Initialize Firebase
    const fire=firebase.initializeApp(firebaseConfig);
  export default fire;