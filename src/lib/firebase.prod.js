import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAZDuaRTF2X4cySZ2rGdgJBPXdHj-guXfM",
  authDomain: "netflix-de1d4.firebaseapp.com",
  databaseURL: "https://netflix-de1d4.firebaseio.com",
  projectId: "netflix-de1d4",
  storageBucket: "netflix-de1d4.appspot.com",
  messagingSenderId: "968996640047",
  appId: "1:968996640047:web:051e62a2edbd53e182fdda",
};

const firebase = Firebase.initializeApp(config);

export { firebase };
