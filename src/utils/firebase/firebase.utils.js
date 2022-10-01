import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBkpMyNpjLkgA6mgMgq33GDpi1I3x-xiU",
  authDomain: "messanger-f4bb6.firebaseapp.com",
  projectId: "messanger-f4bb6",
  storageBucket: "messanger-f4bb6.appspot.com",
  messagingSenderId: "572176500942",
  appId: "1:572176500942:web:1b55e3aaea55ca2b18289f",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
