import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth2 } from "../Database/firebase2";

export const userAuthContext = createContext();

export let UserAuthContextProvider = ({ children }) => {
  const [user, setUser] = useState("");

  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth2, email, password);
  }

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth2, email, password);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth2, currentUser => {
      setUser(currentUser);
    });

    return () => {
      unsubscribe();
    };
  });

  return (
    <userAuthContext.Provider value={{ user, signUp, logIn }}>
      {" "}
      {children}{" "}
    </userAuthContext.Provider>
  );
};

export const useUserAuth = () => {
  return useContext(userAuthContext);
};

// export default UserAuthContextProvider;
