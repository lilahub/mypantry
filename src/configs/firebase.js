import firebase from "firebase"
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyC6Vd1v5x8itFJ77oCC04i2AvPol0Su3y4",
    authDomain: "mypantry-ef34e.firebaseapp.com",
    projectId: "mypantry-ef34e",
    storageBucket: "mypantry-ef34e.appspot.com",
    messagingSenderId: "373989932419",
    appId: "1:373989932419:web:a112c5b84e60fb02980ab6"
  };

  firebase.initializeApp(firebaseConfig);
  export default firebase