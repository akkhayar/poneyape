// Import the functions you need from the SDKs you need
import { FirebaseError, initializeApp } from "firebase/app";
import {
  Auth,
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

import { APIResponse } from "@/types";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBW-jY6V-S3vpXOkoaI4f2nSRpjOPYrisg",
  authDomain: "poneyape-com.firebaseapp.com",
  projectId: "poneyape-com",
  storageBucket: "poneyape-com.appspot.com",
  messagingSenderId: "774628739093",
  appId: "1:774628739093:web:f2a6c4de68089d00ab661c",
  measurementId: "G-QN0QW2KX5W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export class FirebaseClient {
  private auth: Auth;

  constructor(auth: Auth) {
    this.auth = auth;
  }

  async signInWithGoogle() {
    try {
      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({ prompt: "select_account" });
      await signInWithPopup(auth, provider);
      return true;
    } catch (error) {
      console.log("FirebaseClient loginWithGoogle error", error);
      return false;
    }
  }

  async signInWithFacebook() {
    const provider = new FacebookAuthProvider();

    try {
      const userCreds = await signInWithPopup(auth, provider);
      const idToken = await userCreds.user.getIdToken();

      const response = await fetch("/api/auth/sign-in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ idToken }),
      });

      const resBody = (await response.json()) as unknown as APIResponse<string>;
      if (response.ok && resBody.success) {
        return true;
      } else return false;
    } catch (error) {
      console.error("Error signing in with Google", error);
      if (
        error instanceof FirebaseError &&
        error.code === "auth/account-exists-with-different-credential"
      ) {
        return "Account already exist with different provider. Try logging in with other provider and link your account";
      }
      return false;
    }
  }

  async signInWithGithub() {
    const provider = new GithubAuthProvider();

    try {
      const userCreds = await signInWithPopup(auth, provider);
      const idToken = await userCreds.user.getIdToken();
      const response = await fetch("/api/auth/sign-in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ idToken }),
      });

      const resBody = (await response.json()) as unknown as APIResponse<string>;
      if (response.ok && resBody.success) {
        return true;
      } else return false;
    } catch (error) {
      console.error("Error signing in with Github", error);
      if (
        error instanceof FirebaseError &&
        error.code === "auth/account-exists-with-different-credential"
      ) {
        return "Account already exist with different provider. Try logging in with other provider and link your account";
      }
      return false;
    }
  }

  async signInWithEmail(email: string, password: string) {
    try {
      const userCreds = await signInWithEmailAndPassword(auth, email, password);
      const idToken = await userCreds.user.getIdToken();

      const response = await fetch("/api/auth/sign-in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ idToken }),
      });

      const resBody = (await response.json()) as unknown as APIResponse<string>;
      if (response.ok && resBody.success) {
        return true;
      } else return false;
    } catch (error) {
      console.error("Error signing in with Google", error);
      if (
        error instanceof FirebaseError &&
        error.code === "auth/account-exists-with-different-credential"
      ) {
        return "Account already exist with different provider. Try logging in with other provider and link your account";
      }
      return false;
    }
  }

  async signUpWithEmail(email: string, password: string) {
    try {
      const userCreds = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      await sendEmailVerification(userCreds.user);
      await userCreds.user.getIdToken();
    } catch (error) {
      console.error("Error signing in with Google", error);
      return false;
    }
  }

  async resetPassword(email: string) {
    try {
      const response = await sendPasswordResetEmail(auth, email);

      return true;
    } catch (error) {
      console.error("Error resetting link", error);
      return false;
    }
  }
}

export const firebaseClient = new FirebaseClient(auth);
