import { useContext } from "react";
import FirebaseContext from "@/context/firebaseContext";

export const useFirebase = () => {
  const context = useContext(FirebaseContext);
  
  if (context === undefined) {
    throw new Error('useFirebase must be used within a FirebaseProvider');
  }
  
  return context;
};