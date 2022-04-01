import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDoQ6xaDjSTXPrWURiSLj7poFO3b6X9CZc",
  authDomain: "netflix-clone22.firebaseapp.com",
  projectId: "netflix-clone22",
  storageBucket: "netflix-clone22.appspot.com",
  messagingSenderId: "837971894678",
  appId: "1:837971894678:web:37b978ecebf5f690aa7db7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };

export default db;
