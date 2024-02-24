import { FirebaseAuth } from "./firebase.config";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
const auth = FirebaseAuth;

export const SignIn = async (email, password) => {
  await signInWithEmailAndPassword(auth, email, password);
};

export const SignUp = async (email, password) => {
  await createUserWithEmailAndPassword(auth, email, password);
};
