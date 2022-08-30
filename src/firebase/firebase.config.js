
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAE2f-N4JbHjMAIR0mIXgqkizJ_UqJdUXE",
  authDomain: "restaurantapp-b57ab.firebaseapp.com",
  databaseURL: "https://restaurantapp-b57ab-default-rtdb.firebaseio.com",
  projectId: "restaurantapp-b57ab",
  storageBucket: "restaurantapp-b57ab.appspot.com",
  messagingSenderId: "331790251820",
  appId: "1:331790251820:web:4849711c1f31721cac9e89"
};

//We aplly this method so we can optimize our website, if not everytime we get transfers it will initialize again .
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig); 
const fireStore = getFirestore(app);
const storage = getStorage(app)


export {app, fireStore, storage};
