import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDOcamErAXkoJ5yKBa9b5G8NzoSMXjGSgw",
    authDomain: "auth-todo-server.firebaseapp.com",
    databaseURL: "https://auth-todo-server-default-rtdb.firebaseio.com",
    projectId: "auth-todo-server",
    storageBucket: "auth-todo-server.appspot.com",
    messagingSenderId: "991331220760",
    appId: "1:991331220760:web:cd018efe1a23588d63b26d"
};

firebase.initializeApp(config);
firebase.firestore();

export default firebase;
