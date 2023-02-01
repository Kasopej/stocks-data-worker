// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
export {
  ref,
  child,
  set,
  update,
  onValue,
  remove,
  push,
} from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHcX11Hra8hH42TUNKyHltC8B-lgaifzg",
  authDomain: "personalstocktrader-7717a.firebaseapp.com",
  databaseURL:
    "https://personalstocktrader-7717a-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "personalstocktrader-7717a",
  storageBucket: "personalstocktrader-7717a.appspot.com",
  messagingSenderId: "137494008472",
  appId: "1:137494008472:web:224cbfab527ba96ffe76ed",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const DATABASE = getDatabase(app);
