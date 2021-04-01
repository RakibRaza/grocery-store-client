import React, { useState, useContext, useEffect } from "react";

import { auth, fbProvider, githubProvider, googleProvider } from "../firebase";

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [currentUserInfo, setCurrentUserInfo] = useState();
  const [loading, setLoading] = useState(true);

  const signUp = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };
  const logIn = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };
  const googleSignIn = () => {
    return auth.signInWithPopup(googleProvider);
  };
  const fbSignIn = () => {
    return auth.signInWithPopup(fbProvider);
  };
  const githubSignIn = () => {
    return auth.signInWithPopup(githubProvider);
  };
  const logOut = () => {
    return auth.signOut();
  };
  const updateName = (name) => {
    return auth.currentUser.updateProfile({ displayName: name });
  };

  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUserInfo(user);
      setLoading(false);
    });
    return unSubscribe;
  }, []);

  const value = {
    currentUserInfo,
    signUp,
    logIn,
    logOut,
    updateName,
    googleSignIn,
    fbSignIn,
    githubSignIn,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
// make sure use
export const useAuthContext = () => {
  return useContext(AuthContext);
};

export { AuthProvider };
