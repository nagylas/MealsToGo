import React, { useState, createContext } from "react";
import { SignIn, SignUp } from "./authentication.service";

import { FirebaseAuth } from "./firebase.config";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
const auth = FirebaseAuth;

export const AuthenticationContext = createContext();
export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const onLogin = (email, password) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((currentUser) => {
        setUser(currentUser._tokenResponse);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error.toString());
      });
  };

  const onRegister = (email, password, repeatedPassword) => {
    setIsLoading(true);
    if (password !== repeatedPassword) {
      setError("Error: Passwords do not match");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((currentUser) => {
        setUser(currentUser);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error.toString());
      });
  };

  const onLogout = () => {
    setUser(null);
    signOut(auth)
      .then(() => {
        console.log("successful log out");
      })
      .catch((error) => {
        console.log("unsuccessful log out");
      });
  };

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        onLogin,
        onRegister,
        onLogout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
