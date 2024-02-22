import { createUserWithEmailAndPassword } from "firebase/auth";
import { FirebaseAuth } from "./firebase.config";

const auth = FirebaseAuth;

export const SignIn = async (email, password) => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    console.log(response);
  } catch (error) {
    console.log("Sign in failed: " + error.message);
  }
};

export const SignUp = async (email, password) => {
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(response);
  } catch (error) {
    console.log("Check your e-mails: " + error.message);
  }
};
