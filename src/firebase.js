import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
  signInWithRedirect
} from "firebase/auth";

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

initializeApp(config);

const auth = getAuth();

const googleAuthProvider = new GoogleAuthProvider();
const facebookAuthProvider = new FacebookAuthProvider();

export {
  auth,
  googleAuthProvider,
  facebookAuthProvider,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
  signInWithRedirect
};
