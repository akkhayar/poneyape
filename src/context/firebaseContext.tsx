"use client";
import { User as FirebaseUser, onAuthStateChanged } from "firebase/auth";
import React, { createContext, useState, useEffect } from "react";
import { auth } from "../lib/firebase";

// Create types for user and context
type User = FirebaseUser | null | undefined;

interface FirebaseContextType {
  currentUser: User;
  logout: () => void;
}

// Create Firebase context
const FirebaseContext = createContext<FirebaseContextType | undefined>(
  undefined,
);

// Firebase provider component
export const FirebaseProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [isFirstRender, setIsFirstRender] = useState(false);
  const [currentUser, setCurrentUser] = useState<User>(undefined);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    // Cleanup function
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!isFirstRender && currentUser) {
      setIsFirstRender(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser]);

  if (currentUser === undefined) {
    return null;
  }

  const logout = () => auth.signOut();

  return (
    <FirebaseContext.Provider value={{ currentUser, logout }}>
      {children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseContext;
