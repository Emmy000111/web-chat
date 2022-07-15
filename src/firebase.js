import { initializeApp, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
s

// Your web app's Firebase configuration

var app;
var storage;

try {
  app = getApp();
} catch (error) {
  const firebaseConfig = {
    apiKey: "AIzaSyC9lKaEtE5yZZnU1LKqIDsJPQcxJE8_CQ8",
    authDomain: "chatwithemmy-2e537.firebaseapp.com",
    projectId: "chatwithemmy-2e537",
    storageBucket: "chatwithemmy-2e537.appspot.com",
    messagingSenderId: "371076515053",
    appId: "1:371076515053:web:5fe9b6cc845243ec2338e4",
  };
  app = initializeApp(firebaseConfig);
}
storage = getStorage(app);

// Initialize Firebase

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, storage };