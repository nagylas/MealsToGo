import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { ReactNativeAsyncStorage } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBqMjhR9yUoBa0GJNH-PMpDxPBq8mI-vnc",
  authDomain: "mealstogo-89edb.firebaseapp.com",
  projectId: "mealstogo-89edb",
  storageBucket: "mealstogo-89edb.appspot.com",
  messagingSenderId: "199371380627",
  appId: "1:199371380627:web:c6d4cb074c9376aa85fa66",
};

export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
/*export const FirebaseStorage = initializeAuth(FirebaseApp, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});*/
