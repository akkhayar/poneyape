import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";

import { db } from "@/lib/firebase";
import Error from "next/error";

type UserInfo = { displayName: string | null; photoURL: string | null };

export const useFirestoreUser = (uid: string) => {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  useEffect(() => {
    if (!uid) return;

    const fetchUserInfo = async () => {
      setIsLoading(true);
      try {
        const userRef = doc(db, "users", uid);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
          setUserInfo({
            displayName: userSnap.get("displayName") || null,
            photoURL: userSnap.get("photoURL") || null,
          });
        } else {
          console.log("No user found with this UID.");
          setUserInfo(null);
        }
      } catch (err) {
        setError(err as Error);
        setUserInfo(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserInfo();
  }, [uid]);

  return { userInfo, isLoading, error };
};
