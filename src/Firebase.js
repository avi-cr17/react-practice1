import firebase from 'firebase/compat/app';
import "firebase/compat/database";

// http://twitch.tv/killswitchx2514

const firebaseConfig = {
    apiKey: "AIzaSyB-GY9uFwKzXhWO6KwZv6BMlS5_zr6bQvE",
    authDomain: "react-practice-58e7e.firebaseapp.com",
    databaseURL: "https://react-practice-58e7e-default-rtdb.firebaseio.com",
    projectId: "react-practice-58e7e",
    storageBucket: "react-practice-58e7e.appspot.com",
    messagingSenderId: "499851405182",
    appId: "1:499851405182:web:3b2414c4f2bec5983fb52f"
  };


var fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();