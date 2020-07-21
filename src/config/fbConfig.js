  import firebase from 'firebase/app'
  import 'firebase/firestore'
  import 'firebase/auth'
  
  // Your web app's Firebase configuration
  var config = {
    apiKey: "AIzaSyBFKgCK9snYpp3nBQSKSuo_Y14lBYmyjQk",
    authDomain: "gvsblogs-f961a.firebaseapp.com",
    databaseURL: "https://gvsblogs-f961a.firebaseio.com",
    projectId: "gvsblogs-f961a",
    storageBucket: "gvsblogs-f961a.appspot.com",
    messagingSenderId: "442852934382",
    appId: "1:442852934382:web:217f557dfc00259d0f69ff",
    measurementId: "G-FCVLYJY48B"
  };
  // Initialize Firebase
  firebase.initializeApp(config);
  firebase.firestore()

  export default firebase